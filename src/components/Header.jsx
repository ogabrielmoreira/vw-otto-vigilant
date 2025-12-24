const Header = () => {
  return (
    <header className="h-12 sm:h-14 lg:h-16 bg-vw-dark flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-white/5">
      {/* Left side - empty for balance */}
      <div className="w-20"></div>
      
      {/* Center - Home Icon */}
      <div className="flex items-center justify-center">
        <button className="text-white hover:text-vw-light-gray transition-colors">
          <svg width="28" height="28" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.167 19.75H10.417V32.25C10.417 32.801 10.857 33.25 11.417 33.25H17.667V20.75H22.333V33.25H28.583C29.143 33.25 29.583 32.801 29.583 32.25V19.75L17 7.125L4.167 19.75Z" fill="currentColor"/>
            <path d="M0 18.75L17 3.25L34 18.75V23.75H31.667V18.75L17 6.25L2.333 18.75V23.75H0V18.75Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      {/* Right side - Status Icons */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        {/* WiFi Icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M1 9L3 11C7.97 6.03 16.03 6.03 21 11L23 9C16.93 2.93 7.08 2.93 1 9Z" fill="currentColor"/>
          <path d="M5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14 8.87 9.14 5 13Z" fill="currentColor"/>
          <path d="M9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17Z" fill="currentColor"/>
        </svg>
        
        {/* Bluetooth Icon */}
        <svg width="16" height="20" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M7 0V9.59L2.41 5L1 6.41L6.59 12L1 17.59L2.41 19L7 14.41V24L15.59 15.41L10.83 12L15.59 8.59L7 0ZM9 5.17L11.17 7.34L9 9.51V5.17ZM11.17 16.66L9 18.83V14.49L11.17 16.66Z" fill="currentColor"/>
        </svg>
        
        {/* Signal Icon */}
        <div className="flex items-end gap-0.5 h-4">
          <div className="w-1 h-1 bg-white rounded-sm"></div>
          <div className="w-1 h-2 bg-white rounded-sm"></div>
          <div className="w-1 h-3 bg-white rounded-sm"></div>
          <div className="w-1 h-4 bg-white rounded-sm"></div>
        </div>
        
        {/* Battery Icon */}
        <div className="flex items-center">
          <div className="w-6 h-3 border border-white rounded-sm relative">
            <div className="absolute inset-0.5 bg-white rounded-sm" style={{ width: '70%' }}></div>
          </div>
          <div className="w-0.5 h-1.5 bg-white rounded-r-sm"></div>
        </div>
        
        {/* Profile Icon */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00B4D8] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
          </svg>
        </div>
        
        {/* Time */}
        <span className="text-white font-outfit text-sm sm:text-base lg:text-lg font-normal ml-1 sm:ml-2">
          21:15
        </span>
      </div>
    </header>
  )
}

export default Header

