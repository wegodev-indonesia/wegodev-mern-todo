import React from 'react'

import LogoSvgComponent from 'assets/svg/logo';

const Header = () => {
  return (
    <nav className="mb-10 bg-darkPurple w-full flex justify-center items-center shadow-xl box-border">
      <LogoSvgComponent height="80px" />
    </nav>
  )
}

export default Header