import * as React from 'react';

const CloseSvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default CloseSvgComponent