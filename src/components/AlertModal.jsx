import { useState, useEffect } from 'react'

const AlertModal = ({ isOpen, onClose, onAccept, level = 1 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  // Alert configurations based on level
  const alerts = {
    1: {
      color: '#00B374',
      message: 'Percebi que você está com os olhos cansados. Que tal uma parada rápida?\n\nEncontrei um café legal em 2.3 km na sua rota.',
      cancelText: 'Deixa pra depois',
      acceptText: 'Claro, vamos lá',
    },
    2: {
      color: '#FF9500',
      message: 'Sua fadiga tá em nível moderado agora.\nVocê precisa descansar, isso não é sugestão.\n\nAchei um lugar seguro em 3.5 km, com tudo que você precisa.\nVocê topa?',
      cancelText: 'Deixa pra depois',
      acceptText: 'Claro, vamos lá',
    },
    3: {
      color: '#E63946',
      message: 'Você cochilou agora. Eu vi e peguei no volante.\nNão se preocupa, você está seguro.\n\nEncostei o carro no acostamento... você precisa descansar.\nEncontrei um posto de gasolina em 1.2 km na sua rota.',
      cancelText: null,
      acceptText: 'Entendi, vamos lá',
    },
  }

  const alert = alerts[level]

  return (
    <div 
      className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
      {/* Modal Content */}
      <div 
        className={`bg-vw-card rounded-lg p-6 sm:p-8 lg:p-10 max-w-[90%] w-[900px] flex flex-col items-center gap-6 sm:gap-8 transform transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        {/* Title */}
        <h2 className="text-white font-outfit font-normal text-xl sm:text-2xl lg:text-[32px] text-center">
          Otto está falando...
        </h2>

        {/* Audio Wave Icon */}
        <div className="flex items-center justify-center gap-2">
          <div 
            className="flex items-end gap-1 h-16 sm:h-20 lg:h-24"
            style={{ color: alert.color }}
          >
            {/* Animated bars */}
            {[40, 60, 80, 100, 80, 60, 40, 30, 50, 70, 90, 70, 50, 30].map((height, i) => (
              <div
                key={i}
                className="w-1.5 sm:w-2 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: alert.color,
                  height: `${height}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.8s',
                }}
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <p className="text-white font-outfit font-normal text-sm sm:text-lg lg:text-[32px] text-center leading-relaxed whitespace-pre-line max-w-[800px]">
          {alert.message}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-2">
          {alert.cancelText && (
            <button
              onClick={onClose}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 text-sm sm:text-lg font-outfit font-normal transition-all hover:bg-white/10"
              style={{ 
                borderColor: alert.color,
                color: alert.color,
              }}
            >
              {alert.cancelText}
            </button>
          )}
          <button
            onClick={onAccept}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-outfit font-normal text-vw-dark transition-all hover:opacity-90"
            style={{ backgroundColor: alert.color }}
          >
            {alert.acceptText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlertModal

