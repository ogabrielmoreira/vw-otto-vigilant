import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertModal from '../components/AlertModal'

function OttoVigilantPage() {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)
  const [alertLevel, setAlertLevel] = useState(1)

  // Show alert after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const events = [
    {
      id: 1,
      type: 'low',
      title: 'Cansaço Leve - 20 de Novembro, 14h30',
      description: 'Pausa para café aceita',
      color: '#00B374',
    },
    {
      id: 2,
      type: 'critical',
      title: 'Fadiga Crítica - 21 de Dezembro, 22h10',
      descriptions: [
        'Motorista em BR-101 à noite, cochilou.',
        'Sistema assumiu controle | Parada segura',
      ],
      color: '#E63946',
    },
  ]

  // Alert/Warning Icon Component
  const AlertIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M30 5L55 52H5L30 5Z" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M30 24V34" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      <circle 
        cx="30" 
        cy="42" 
        r="2" 
        fill={color}
      />
    </svg>
  )

  const handleAlertClose = () => {
    setShowAlert(false)
  }

  const handleAlertAccept = () => {
    setShowAlert(false)
    // Could navigate to a route or perform an action
  }

  return (
    <div className="min-h-screen h-screen bg-vw-dark flex items-center justify-center overflow-hidden">
      {/* Main Container - Aspect ratio matching Figma design */}
      <div className="relative w-full h-full max-w-[1333px] max-h-[620px] aspect-[1333/620]">
        {/* Base Image - Contains all infotainment UI (sidebars, header) */}
        <img 
          src="/images/otto-history-base.png" 
          alt="VW Infotainment Base" 
          className="absolute inset-0 w-full h-full object-contain z-0"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full relative">
            {/* Background card area */}
            <div 
              className="absolute bg-vw-card rounded-lg pointer-events-auto"
              style={{
                left: '6.68%',
                top: '10.16%',
                width: '86.65%',
                height: '85.48%',
              }}
            >
              {/* Title */}
              <h1 
                className="absolute text-white font-outfit font-normal leading-[1.26]"
                style={{
                  left: '4.16%',
                  top: '10.19%',
                  fontSize: 'clamp(40px, 6vw, 80px)',
                }}
              >
                Otto Vigilant
              </h1>
              
              {/* Section Title */}
              <p 
                className="absolute text-white font-outfit font-light leading-tight"
                style={{
                  left: '4.16%',
                  top: '27.55%',
                  fontSize: 'clamp(20px, 2.4vw, 32px)',
                }}
              >
                Registro de eventos
              </p>
              
              {/* Events List */}
              <div 
                className="absolute flex flex-col gap-3 sm:gap-4"
                style={{
                  left: '4.16%',
                  top: '38.3%',
                  width: '89.7%',
                }}
              >
                {/* Event 1 - Cansaço Leve */}
                <div 
                  className="bg-[#34363B] rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-[#3d3f44] transition-colors"
                  onClick={() => { setAlertLevel(1); setShowAlert(true); }}
                >
                  {/* Alert Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0">
                    <AlertIcon color={events[0].color} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <h3 className="text-white font-outfit font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight tracking-tight">
                      {events[0].title}
                    </h3>
                    <p className="text-white font-outfit font-light text-xs sm:text-base md:text-lg lg:text-xl xl:text-[32px] leading-tight tracking-tight">
                      {events[0].description}
                    </p>
                  </div>
                </div>
                
                {/* Event 2 - Fadiga Crítica */}
                <div 
                  className="bg-[#34363B] rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-[#3d3f44] transition-colors"
                  onClick={() => { setAlertLevel(3); setShowAlert(true); }}
                >
                  {/* Alert Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0">
                    <AlertIcon color={events[1].color} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <h3 className="text-white font-outfit font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight tracking-tight">
                      {events[1].title}
                    </h3>
                    {events[1].descriptions.map((desc, index) => (
                      <p key={index} className="text-white font-outfit font-light text-xs sm:text-base md:text-lg lg:text-xl xl:text-[32px] leading-tight tracking-tight">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alert Modal */}
        <AlertModal 
          isOpen={showAlert}
          onClose={handleAlertClose}
          onAccept={handleAlertAccept}
          level={alertLevel}
        />
        
        {/* Clickable back area on left sidebar (arrow icon) */}
        <button 
          onClick={() => navigate('/')}
          className="absolute z-10 cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            left: '0.5%',
            top: '3%',
            width: '5%',
            height: '10%',
          }}
          aria-label="Voltar para home"
        />
      </div>
    </div>
  )
}

export default OttoVigilantPage
