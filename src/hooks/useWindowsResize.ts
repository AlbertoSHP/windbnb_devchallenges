import { useState, useEffect } from 'react'

const useWindowsResize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [isMobile, setIsMobile] = useState(false)

    const setDimension = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
      }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        setIsMobile( screenSize.width <= 632 )
    
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    
    }, [screenSize])
    
    
  return {
    ...screenSize,
    isMobile
  }
}

export default useWindowsResize