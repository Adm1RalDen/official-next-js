import { useState, useEffect, MutableRefObject } from 'react'

export const useCounting = (
  ref: MutableRefObject<HTMLElement | null>,
  from: number,
  to: number,
  speed: number
) => {
  const [number, setNumber] = useState(from)

  function animateValue(start: number, end: number, duration: number) {
    if (start === end) return
    const range = end - start
    let current = start
    const increment = end > start ? 1 : -1
    const stepTime = Math.abs(Math.floor(duration / range))
    const timer = setInterval(function () {
      current += increment
      setNumber(current)
      if (current == end) {
        clearInterval(timer)
      }
    }, stepTime)
  }

  useEffect(() => {
    if (ref.current) animateValue(from, to, speed)
  }, [])

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = number.toString()
  }, [number])
}
