import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { NakedInputContainer } from './styles';
interface TextFieldProps {
  name: string;
  placeholder?: string | React.ReactNode;
  multiline?: boolean;
  defaultValue?: string;
  rows?: number;
  [key: string]: any;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  icon: Icon,
  placeholder,
  multiline,
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <NakedInputContainer
      defaultValue={defaultValue}
      type="text"
      ref={inputRef}
      {...rest}
    />
  );
};

export default TextField;
