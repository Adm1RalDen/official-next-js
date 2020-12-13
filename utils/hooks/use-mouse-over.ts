import { useState, useEffect } from 'react'

export const useMouseOver = (ref: HTMLElement | null) => {
  const [hovered, setHover] = useState(false)

  const onMouseOver = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  useEffect(() => {
    if (ref) {
      ref.addEventListener('mouseover', onMouseOver)
      ref.addEventListener('mouseleave', onMouseLeave)
      return () => {
        ref.removeEventListener('mouseover', onMouseOver)
        ref.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  })

  return hovered
}
