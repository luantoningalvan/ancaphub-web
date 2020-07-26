/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import { useField } from '@unform/core';
import { SelectContainer, Error } from './styles';

const Select = ({ name, icon: Icon, placeholder, options = [], ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);
  const selectRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [selectedValue, setSelectedValue] = useState(() => {
    if (defaultValue) {
      const label = options.find((opt) => opt.value === defaultValue);
      return { value: defaultValue, label: label.label };
    }
    return { value: '', label: '' };
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setIsFilled(true);
    }
  }, []);

  useEffect(() => {
    function clickOutside(e) {
      if (!selectRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    }
    if (selectRef.current !== null) {
      document.addEventListener('click', clickOutside);
      return () => document.removeEventListener('click', clickOutside);
    }
  }, [inputRef]);

  const handleSelectOption = useCallback(({ value, label }) => {
    inputRef.current.value = value;
    setSelectedValue({ value, label });
    setIsFilled(true);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  return (
    <SelectContainer
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
      onClick={handleInputFocus}
      ref={selectRef}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      <label className="input-label" htmlFor="select">
        {placeholder}
      </label>

      <select ref={inputRef} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={`s-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="selected-option">{selectedValue.label}&nbsp;</div>

      <FiChevronDown />

      <div className="select-options">
        {options.map((option) => (
          <div
            role="menuitemradio"
            aria-checked={false}
            tabIndex={0}
            key={option.value}
            onClick={() => handleSelectOption(option)}
          >
            {option.label}
          </div>
        ))}
      </div>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size="20px" />
        </Error>
      )}
    </SelectContainer>
  );
};

export default Select;
