export interface CardRefreshIconI {
  size?: string;
  color?: string; 
  speed?: string; 
}

export default function CardRefreshIcon({
  size = "w-12 h-12",
  color = "currentColor",
  speed = "1.5s",
}: CardRefreshIconI) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={size}
      fill={color}
      style={{ animation: `spin ${speed} linear infinite`, transformOrigin: "50% 50%" }}
    >
      <g>
        <path d="M12 2 L15 8 L9 8 Z" />
        <path d="M22 12 L16 15 L16 9 Z" />
        <path d="M12 22 L15 16 L9 16 Z" />
        <path d="M2 12 L8 15 L8 9 Z" />
      </g>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
}
