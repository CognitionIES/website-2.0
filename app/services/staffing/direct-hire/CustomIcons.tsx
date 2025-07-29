import React from "react";

interface IconProps {
  className?: string;
}

export const CustomHandshake: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM21 9V7L18 4C17.6 3.6 17 3.6 16.6 4L15 5.6L12.4 3C12 2.6 11.4 2.6 11 3L8.4 5.6L7 4C6.6 3.6 6 3.6 5.6 4L3 7V9C3 9.6 3.4 10 4 10S5 9.6 5 9V8.4L6 7.4L7.4 8.8C7.8 9.2 8.4 9.2 8.8 8.8L11.4 6.2L14 8.8C14.4 9.2 15 9.2 15.4 8.8L17 7.2L18 8.2V9C18 9.6 18.4 10 19 10S20 9.6 20 9V8.2L21 9Z"
      fill="currentColor"
    />
    <path
      d="M4 12C3.4 12 3 12.4 3 13V19C3 19.6 3.4 20 4 20H8C8.6 20 9 19.6 9 19V17H15V19C15 19.6 15.4 20 16 20H20C20.6 20 21 19.6 21 19V13C21 12.4 20.6 12 20 12H16C15.4 12 15 12.4 15 13V15H9V13C9 12.4 8.6 12 8 12H4Z"
      fill="currentColor"
    />
  </svg>
);

export const CustomArrowDown: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4V20M12 20L6 14M12 20L18 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CustomClock: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 6V12L16 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CustomStar: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
);

export const CustomDollar: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1V23M17 5H9.5C8.11929 5 7 6.11929 7 7.5C7 8.88071 8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15H7M17 19H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CustomGraph: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V21H21M7 14L12 9L16 13L21 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="14" r="2" fill="currentColor" />
    <circle cx="12" cy="9" r="2" fill="currentColor" />
    <circle cx="16" cy="13" r="2" fill="currentColor" />
    <circle cx="21" cy="8" r="2" fill="currentColor" />
  </svg>
);

export const CustomChevronDown: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
