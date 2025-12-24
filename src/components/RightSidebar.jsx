const RightSidebar = () => {
  return (
    <aside className="w-12 sm:w-14 lg:w-16 bg-transparent flex flex-col items-center py-4 lg:py-6 justify-between">
      {/* Top - Parking Icon */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-vw-light-gray hover:text-white transition-all duration-200 hover:scale-110"
          aria-label="parking"
        >
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="4" y="30" fill="currentColor" fontFamily="Outfit" fontSize="28" fontWeight="500">P</text>
            <path d="M30 12L36 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M36 12L30 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Middle - Car Icon */}
      <div className="flex-1 flex items-center justify-center">
        <button
          className="w-10 h-8 sm:w-12 sm:h-10 lg:w-14 lg:h-12 flex items-center justify-center text-vw-light-gray hover:text-white transition-all duration-200 hover:scale-110"
          aria-label="car"
        >
          <svg width="40" height="24" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 24C11.933 24 13.5 22.433 13.5 20.5C13.5 18.567 11.933 17 10 17C8.067 17 6.5 18.567 6.5 20.5C6.5 22.433 8.067 24 10 24Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M38 24C39.933 24 41.5 22.433 41.5 20.5C41.5 18.567 39.933 17 38 17C36.067 17 34.5 18.567 34.5 20.5C34.5 22.433 36.067 24 38 24Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M6.5 20.5H3C2 20.5 1 19.5 1 18.5V14C1 13 2 12 3 12H8L13 4H35L40 12H45C46 12 47 13 47 14V18.5C47 19.5 46 20.5 45 20.5H41.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 20.5H34.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 12H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Bottom - Settings Icon */}
      <div className="mb-2 sm:mb-3 lg:mb-4">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-vw-light-gray hover:text-white transition-all duration-200 hover:scale-110"
          aria-label="settings"
        >
          <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.21 28.667L11.38 22C10.92 21.826 10.5 21.618 10.1 21.375C9.7 21.132 9.31 20.872 8.93 20.594L2.73 23.198L-3 13.302L2.36 9.24C2.33 8.997 2.31 8.762 2.31 8.536V7.13C2.31 6.905 2.33 6.67 2.36 6.427L-3 2.365L2.73 -7.531L8.93 -4.927C9.31 -5.205 9.71 -5.465 10.12 -5.708C10.54 -5.951 10.96 -6.16 11.38 -6.333L12.21 -13H23.67L24.5 -6.333C24.95 -6.16 25.38 -5.951 25.78 -5.708C26.18 -5.465 26.57 -5.205 26.95 -4.927L33.15 -7.531L38.88 2.365L33.51 6.427C33.55 6.67 33.56 6.905 33.56 7.13V8.536C33.56 8.762 33.53 8.997 33.46 9.24L38.82 13.302L33.09 23.198L26.95 20.594C26.57 20.872 26.17 21.132 25.75 21.375C25.33 21.618 24.92 21.826 24.5 22L23.67 28.667H12.21ZM15.85 24.5H19.97L20.7 18.979C21.77 18.701 22.77 18.293 23.69 17.755C24.61 17.217 25.45 16.566 26.22 15.802L31.38 17.938L33.41 14.396L28.93 11.01C29.1 10.524 29.22 10.012 29.29 9.474C29.36 8.936 29.4 8.389 29.4 7.833C29.4 7.278 29.36 6.731 29.29 6.193C29.22 5.655 29.1 5.142 28.93 4.656L33.41 1.271L31.38 -2.271L26.22 -0.083C25.45 -0.882 24.61 -1.55 23.69 -2.089C22.77 -2.627 21.77 -3.035 20.7 -3.312L20.02 -8.833H15.91L15.18 -3.312C14.1 -3.035 13.1 -2.627 12.18 -2.089C11.26 -1.55 10.42 -0.899 9.66 -0.135L4.5 -2.271L2.47 1.271L6.95 4.604C6.77 5.125 6.65 5.646 6.58 6.167C6.51 6.688 6.48 7.243 6.48 7.833C6.48 8.389 6.51 8.927 6.58 9.448C6.65 9.969 6.77 10.49 6.95 11.01L2.47 14.396L4.5 17.938L9.66 15.75C10.42 16.549 11.26 17.217 12.18 17.755C13.1 18.293 14.1 18.701 15.18 18.979L15.85 24.5ZM18.04 15.125C20.06 15.125 21.77 14.413 23.2 12.99C24.62 11.566 25.33 9.847 25.33 7.833C25.33 5.819 24.62 4.101 23.2 2.677C21.77 1.253 20.06 0.542 18.04 0.542C15.99 0.542 14.27 1.253 12.86 2.677C11.45 4.101 10.75 5.819 10.75 7.833C10.75 9.847 11.45 11.566 12.86 12.99C14.27 14.413 15.99 15.125 18.04 15.125Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </aside>
  )
}

export default RightSidebar
