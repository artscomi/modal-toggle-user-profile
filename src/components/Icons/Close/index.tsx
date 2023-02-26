import React from "react";

export const Close: React.FC = (props) => {
  return (
    <svg
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1.41L1.41 0L7 5.59L12.59 0L14 1.41L8.41 7L14 12.59L12.59 14L7 8.41L1.41 14L0 12.59L5.59 7L0 1.41Z" />
    </svg>
  );
};
