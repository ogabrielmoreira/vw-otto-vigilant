import AppGrid from '../components/AppGrid'

function HomePage() {
  return (
    <div className="min-h-screen h-screen bg-vw-dark flex items-center justify-center overflow-hidden">
      {/* Main Container - Aspect ratio matching Figma design */}
      <div className="relative w-full h-full max-w-[1333px] max-h-[620px] aspect-[1333/620]">
        {/* Base Image - Contains all infotainment UI (sidebars, header) */}
        <img 
          src="/images/infotainment-base.png" 
          alt="VW Infotainment Base" 
          className="absolute inset-0 w-full h-full object-contain z-0"
        />
        
        {/* Content Overlay - Apps section only (without covering sidebars) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full relative">
            {/* Background card area - positioned to match Figma exactly */}
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
                Descubra seus apps
              </h1>
              
              {/* App Grid */}
              <div 
                className="absolute"
                style={{
                  left: '4.16%',
                  top: '31.13%',
                  width: '85%',
                }}
              >
                <AppGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

