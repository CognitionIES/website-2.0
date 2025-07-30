import React from "react";

interface IconProps {
  className?: string;
  size?: number;
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

// Custom handshake icon for Direct Hire
export const HandshakeIcon: React.FC<IconProps> = ({
  className,
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L14.5 6.5L19 7L15.5 10.5L16.5 15L12 12.5L7.5 15L8.5 10.5L5 7L9.5 6.5L12 2Z"
      fill="currentColor"
    />
    <path
      d="M3 17C3 17 6 20 9 17C12 14 15 17 18 14C21 11 18 8 15 11C12 14 9 11 6 14C3 17 3 17 3 17Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Custom clock icon for Contract Staffing
export const ClockIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

// Custom checklist icon for Contract-to-Hire
export const ChecklistIcon: React.FC<IconProps> = ({
  className,
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
    <path d="M7 6H7.01" stroke="currentColor" strokeWidth="2" />
    <path d="M7 18H7.01" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Custom gear icon for RPO
export const GearIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M8 12L10 14L16 8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Custom team icon for Project-Based Hiring
export const TeamIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M16 21V19C16 17.9 15.1 17 14 17H10C8.9 17 8 17.9 8 19V21"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M22 21V19C22 17.5 21 16.1 19.5 15.6"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M19 7.5C19.8 7.5 20.5 8.2 20.5 9S19.8 10.5 19 10.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M2 21V19C2 17.5 3 16.1 4.5 15.6"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M5 7.5C4.2 7.5 3.5 8.2 3.5 9S4.2 10.5 5 10.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Custom search icon for Process steps
export const SearchIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" />
    <circle cx="11" cy="11" r="3" fill="currentColor" />
  </svg>
);

// Custom globe icon for Sourcing
export const GlobeIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2C14.5 4.8 16 8.4 16 12S14.5 19.2 12 22C9.5 19.2 8 15.6 8 12S9.5 4.8 12 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Custom clipboard icon for Evaluation
export const ClipboardIcon: React.FC<IconProps> = ({
  className,
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="8"
      y="2"
      width="8"
      height="4"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M16 4H18C19.1 4 20 4.9 20 6V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V6C4 4.9 4.9 4 6 4H8"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Custom calendar icon for Interview Coordination
export const CalendarIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="2" />
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Custom document icon for Offer & Onboarding
export const DocumentIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Custom support icon for Post-Hire Support
export const SupportIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M9.09 9C9.325 8.685 9.655 8.45 10.04 8.325C10.425 8.2 10.84 8.19 11.23 8.295C11.62 8.4 11.965 8.615 12.22 8.915C12.475 9.215 12.62 9.585 12.635 9.97C12.65 10.355 12.535 10.735 12.305 11.055C12.075 11.375 11.745 11.615 11.365 11.74L12 14H10L9.5 12H9L9.09 9ZM12 17H12.01"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Custom bank icon for BFSI
export const BankIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M3 21H21M5 21V7L12 3L19 7V21M9 9V13M15 9V13M12 9V13"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M9 21V17H15V21" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Custom laptop icon for IT
export const LaptopIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="12"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M2 18H22" stroke="currentColor" strokeWidth="2" />
    <path d="M8 8H16M8 12H14" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Custom wrench icon for Engineering
export const WrenchIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9L13.1 3.3C12.7 2.9 12.1 2.9 11.7 3.3L10.5 4.5L7.5 7.5L3 12L12 21L16.5 16.5L19.5 13.5L20.7 12.3C21.1 11.9 21.1 11.3 20.7 10.9L19.1 9.3C18.7 8.9 18.1 8.9 17.7 9.3L14.7 6.3Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M6 15L9 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Custom signal icon for Telecom
export const SignalIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M2 20H4V16H2V20ZM6 20H8V12H6V20ZM10 20H12V8H10V20ZM14 20H16V4H14V20ZM18 20H20V10H18V20Z"
      fill="currentColor"
    />
    <circle cx="19" cy="5" r="2" fill="currentColor" />
  </svg>
);

// Custom oil drop icon for Oil and Gas
export const OilIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L8 8C6.5 10.5 6.5 13.5 8 16C9.5 18.5 12 20 12 20S14.5 18.5 16 16C17.5 13.5 17.5 10.5 16 8L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="14" r="3" fill="currentColor" />
    <path d="M12 11V17" stroke="white" strokeWidth="1" />
  </svg>
);

// Custom database icon for ATS
export const DatabaseIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <ellipse
      cx="12"
      cy="5"
      rx="9"
      ry="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Custom brain icon for AI Tools
export const BrainIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2C10.5 2 9.2 2.7 8.5 3.8C7.8 3.3 6.9 3 6 3C3.8 3 2 4.8 2 7C2 8.1 2.4 9.1 3.1 9.8C2.4 10.6 2 11.7 2 13C2 15.2 3.8 17 6 17C6.9 17 7.8 16.7 8.5 16.2C9.2 17.3 10.5 18 12 18C13.5 18 14.8 17.3 15.5 16.2C16.2 16.7 17.1 17 18 17C20.2 17 22 15.2 22 13C22 11.7 21.6 10.6 20.9 9.8C21.6 9.1 22 8.1 22 7C22 4.8 20.2 3 18 3C17.1 3 16.2 3.3 15.5 3.8C14.8 2.7 13.5 2 12 2Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 10H10M14 10H16M10 14H14"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

// Custom network icon for CRM
export const NetworkIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M9.7 9.7L6.3 6.3M14.3 9.7L17.7 6.3M9.7 14.3L6.3 17.7M14.3 14.3L17.7 17.7"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

// Custom video icon for Video Interviewing
export const VideoIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M7 12L12 9V15L7 12Z" fill="currentColor" />
    <circle cx="18" cy="9" r="1" fill="currentColor" />
  </svg>
);
