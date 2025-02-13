import React from "react";
import BaseInput from "../BaseInput";

interface InputEmailProps {
  id?: string;
  name: string;
  label?: string;
  width?: string;
  height?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail = (props: InputEmailProps) => {
  return <BaseInput type="email" {...props} />;
};

export default InputEmail;
