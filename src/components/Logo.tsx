import React from 'react'

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-bold">
        <span className="text-primary">R</span>
        <span className={isScrolled ? 'text-secondary' : 'text-white'}>y</span>
        <span className="text-primary">K</span>
        <span className={isScrolled ? 'text-secondary' : 'text-white'}> Investments</span>
      </span>
    </div>
  )
}

export default Logo
