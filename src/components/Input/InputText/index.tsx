import React from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";

interface InputTextProps extends BaseInputProps {}

const InputText = (props: InputTextProps) => {
  return <BaseInput type="text" {...props} />;
};

export default InputText;
