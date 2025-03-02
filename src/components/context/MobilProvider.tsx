import React, { createContext, useEffect, useState } from 'react'

interface MobilProviderContext {
  isMobil: boolean,
  isSmallView: boolean
}


export const MobilProviderContext = createContext<MobilProviderContext | null>(null)

const MobilProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobil, setIsMobil] = useState<boolean>(false);
  const [isSmallView, setIsSmallView] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const handleResize = () => {
      const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsSmallView(window.innerWidth < 480);
      if (isTouchCapable) {
        setIsMobil(true);

      } else {
        setIsMobil(false);
      }
    }

    window.addEventListener('scroll', handleResize, { signal: controller.signal })
    window.addEventListener('resize', handleResize, { signal: controller.signal })
    handleResize();
    return () => { controller.abort() }
  }, [])

  return (
    <MobilProviderContext.Provider value={{ isMobil, isSmallView }}>
      {children}
    </MobilProviderContext.Provider>
  )
}

export default MobilProvider