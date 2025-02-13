import React, { useState, useEffect } from "react";
import BaseInput from "../BaseInput";
import { CopyButton, AlertWrapper } from "./styled";
import { CopyIcon } from '@/components/icons/Copy';

interface InputCopyProps {
  id?: string;
  name: string;
  label?: string;
  width?: string;
  height?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCopy = ({
  id,
  name,
  label,
  width,
  height,
  value,
  placeholder,
  onChange,
  ...rest
}: InputCopyProps) => {
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value || "");
    setShowCopyAlert(true);
  };

  useEffect(() => {
    if (showCopyAlert) {
      const timer = setTimeout(() => {
        setShowCopyAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopyAlert]);

  return (
    <div style={{ position: "relative" }}>
      <BaseInput
        id={id}
        name={name}
        label={label}
        type="text"
        placeholder={placeholder}
        width={width}
        height={height}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <CopyButton type="button" onClick={handleCopyToClipboard}>
        <CopyIcon />
      </CopyButton>
      {showCopyAlert && (
        <AlertWrapper>
          Código copiado para área de transferência
        </AlertWrapper>
      )}
    </div>
  );
};

export default InputCopy;
