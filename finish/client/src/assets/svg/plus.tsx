import * as React from 'react';

const PlusSvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  )
}

export default PlusSvgComponent