import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
  xPercent: number
  yPercent: number
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    xPercent: 50,
    yPercent: 50
  })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100
      const yPercent = (e.clientY / window.innerHeight) * 100
      
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        xPercent,
        yPercent
      })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}
