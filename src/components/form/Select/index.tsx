import React, { useEffect, useRef, useState, useCallback } from "react";
import { FiAlertCircle, FiChevronDown, FiPlusCircle } from "react-icons/fi";
import { useField } from "@unform/core";
import {
  SelectContainer,
  SelectField,
  SelectOptionList,
  SelectOption,
  AddOptionButton,
  Error,
} from "./styles";
import { Dropdown } from "snake-ui";

interface SelectProps {
  name: string;
  icon?: JSX.Element;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  onAddButtonClick?(): void;
  style?: React.CSSProperties;
}

const Select: React.FC<SelectProps> = ({
  name,
  icon: Icon,
  placeholder,
  options = [],
  onAddButtonClick,
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<any>(null);
  const selectRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedValue, setSelectedValue] = useState(() => {
    if (defaultValue) {
      const label = options.find((opt) => opt.value === defaultValue); // @ts-ignore
      return { value: defaultValue, label: label.label };
    }
    return { value: "", label: "" };
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setIsFilled(true);
    }
  }, []);

  const handleSelectOption = useCallback(({ value, label }) => {
    inputRef.current.value = value;
    setSelectedValue({ value, label });
    setIsFilled(true);
    setAnchorEl(null);
  }, []);

  const handleClick = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  return (
    <SelectContainer ref={selectRef} {...rest}>
      <SelectField
        isFocused={Boolean(anchorEl)}
        isFilled={isFilled}
        isErrored={!!error}
        onClick={handleClick}
      >
        <label className="input-label" htmlFor="selec">
          {placeholder}
        </label>
        <input value={selectedValue.label} />

        <select ref={inputRef} defaultValue={defaultValue}>
          {options.map((option) => (
            <option key={`s-${option.value}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FiChevronDown size={20} />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </SelectField>

      <Dropdown
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        placement="bottom-start"
      >
        <div style={{ width: selectRef?.current?.clientWidth }}>
          {options.length > 0 ? (
            <SelectOptionList>
              {options.map((option) => (
                <SelectOption
                  key={option.value}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </SelectOption>
              ))}
            </SelectOptionList>
          ) : (
            <div style={{ padding: 16 }}>Nenhuma opção encontrada</div>
          )}
          {onAddButtonClick && (
            <AddOptionButton
              type="button"
              onClick={() => {
                onAddButtonClick();
                setAnchorEl(null);
              }}
            >
              {" "}
              <FiPlusCircle size={18} />
              Adicionar
            </AddOptionButton>
          )}
        </div>
      </Dropdown>
    </SelectContainer>
  );
};

export default Select;
