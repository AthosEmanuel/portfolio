import React from "react";
import "./style.scss";

interface SpanProps {
  customStyles?: React.CSSProperties;
  text: string;
}

const Button: React.FC<SpanProps> = ({ customStyles, text }) => {
  return (
    <span className="spanBody" style={customStyles}>
      {text}
    </span>
  );
};

export default Button;
