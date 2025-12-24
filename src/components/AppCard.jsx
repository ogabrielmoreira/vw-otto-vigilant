import { useNavigate } from 'react-router-dom'

const AppCard = ({ icon, name, description, category, link }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    if (link) {
      navigate(link)
    }
  }

  return (
    <div 
      className={`flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 group transition-all duration-300 hover:translate-x-1 ${link ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleClick}
    >
      {/* App Icon */}
      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] rounded-lg overflow-hidden flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:shadow-white/10 transition-all duration-300">
        <img 
          src={icon} 
          alt={`${name} icon`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* App Info */}
      <div className="flex flex-col justify-center min-h-[50px] sm:min-h-[70px] md:min-h-[85px] lg:min-h-[100px]">
        {/* App Name */}
        <h2 className="text-white font-outfit font-normal text-[16px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-tight mb-0 sm:mb-0.5 group-hover:text-vw-light-gray transition-colors duration-300">
          {name}
        </h2>
        
        {/* Category or Description */}
        {category ? (
          <p className="text-vw-gray font-outfit font-light text-[12px] sm:text-[18px] md:text-[24px] lg:text-[28px] leading-tight">
            {category}
          </p>
        ) : (
          <p className="text-vw-gray font-outfit font-light text-[10px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-snug whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default AppCard

