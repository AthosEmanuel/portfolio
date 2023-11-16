import React from "react";
import "./style.scss";

interface ButtonProps {
  handleEvent?: () => void;
  customStyles?: React.CSSProperties;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ customStyles, handleEvent, text }) => {
  return (
    <button style={customStyles} onClick={handleEvent}>
      {text}
    </button>
  );
};

export default Button;
