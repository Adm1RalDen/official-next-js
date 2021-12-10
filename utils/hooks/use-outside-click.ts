import { useEffect } from 'react'

export function useOutsideClick(
  ref: HTMLDivElement,
  callback: () => void
): void {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref && !ref.contains(event.target as Node | null)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

export default useOutsideClick
