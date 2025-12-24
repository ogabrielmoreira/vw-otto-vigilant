import AppCard from './AppCard'

const AppGrid = () => {
  const apps = [
    {
      id: 1,
      icon: '/images/meu-vw-icon.png',
      name: 'Meu VW',
      description: 'Integração total\ncom seu carro.',
      category: null,
      link: null,
    },
    {
      id: 2,
      icon: '/images/otto-vigilant-icon.png',
      name: 'Otto Vigilant',
      description: null,
      category: 'Monitoramento',
      link: '/otto-vigilant',
    },
    {
      id: 3,
      icon: '/images/waze-icon.png',
      name: 'Waze',
      description: 'GPS, Mapas e\nAlertas de trânsito.',
      category: null,
      link: null,
    },
    {
      id: 4,
      icon: '/images/porto-seguro-icon.png',
      name: 'Porto Seguro',
      description: null,
      category: 'Seguradora',
      link: null,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-x-[18%] gap-y-[40px] sm:gap-y-[50px] md:gap-y-[60px] lg:gap-y-[70px]">
      {/* Row 1 */}
      <AppCard 
        icon={apps[0].icon}
        name={apps[0].name}
        description={apps[0].description}
        category={apps[0].category}
        link={apps[0].link}
      />
      <AppCard 
        icon={apps[1].icon}
        name={apps[1].name}
        description={apps[1].description}
        category={apps[1].category}
        link={apps[1].link}
      />
      
      {/* Row 2 */}
      <AppCard 
        icon={apps[2].icon}
        name={apps[2].name}
        description={apps[2].description}
        category={apps[2].category}
        link={apps[2].link}
      />
      <AppCard 
        icon={apps[3].icon}
        name={apps[3].name}
        description={apps[3].description}
        category={apps[3].category}
        link={apps[3].link}
      />
    </div>
  )
}

export default AppGrid

