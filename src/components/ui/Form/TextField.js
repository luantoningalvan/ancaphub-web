import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { TextFieldContainer, Error } from './styles';

const TextField = ({ name, icon: Icon, placeholder, multiline, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setIsFilled(true);
    }
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(inputRef.current !== null && !!inputRef.current.value);
  }, []);

  return (
    <TextFieldContainer
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
    >
      <label className="input-label" htmlFor="selec">
        {placeholder}
      </label>
      {!multiline ? (
        <input
          defaultValue={defaultValue}
          type="text"
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      ) : (
        <textarea
          defaultValue={defaultValue}
          type="text"
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      )}

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size="20px" />
        </Error>
      )}
    </TextFieldContainer>
  );
};

export default TextField;
