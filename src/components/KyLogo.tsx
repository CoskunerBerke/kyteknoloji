import React from 'react';

interface IconProps {
  className?: string;
}

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const KyLogo: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-label="KY Teknoloji Logosu"
    >
      <rect width="120" height="120" rx="24" fill="#18181B" stroke="#F97316" strokeWidth="3" />
      <polygon
        points="60,11 73,41 106,44 80,66 88,99 60,81 32,99 40,66 14,44 47,41"
        fill="#09090B"
        stroke="#F97316"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="29" fill="#FFFFFF" stroke="#F97316" strokeWidth="4.5" />
      <text
        x="60"
        y="63"
        textAnchor="middle"
        fontFamily="Outfit, Plus Jakarta Sans, Arial Black, sans-serif"
        fontWeight="900"
        fontSize="24"
        fill="#EA580C"
        letterSpacing="-1"
      >
        KY
      </text>
      <text
        x="60"
        y="75.5"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans, Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="7"
        fill="#09090B"
        letterSpacing="0.5"
      >
        TEKNOLOJİ
      </text>
    </svg>
  );
};

export default KyLogo;
