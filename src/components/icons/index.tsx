import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
}

export const MenuAlt1Icon: React.FC<IconProps & { onClick?: () => void }> = ({
  onClick,
  ...props
}) => (
  <div onClick={onClick}>
    <svg
      style={props.style}
      className={props.className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </div>
);

export const XIcon: React.FC<IconProps & { onClick?: () => void }> = ({
  onClick,
  ...props
}) => (
  <div onClick={onClick}>
    <svg
      style={props.style}
      className={props.className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div>
);
