import Link from 'next/link'
import Logo from 'assets/icons/logo-wtt-w.svg'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

interface IHeader {
  bgColor?: string
}

const Header: React.FC<IHeader> = (props: IHeader) => {
  const [isFixed, setIsFixed] = useState(true)

  useScrollPosition(
    ({ _, currPos }) => {
      if (currPos.y === 0) {
        setIsFixed(true)
      } else {
        isFixed && setIsFixed(false)
      }
    },
    [],
    undefined,
    undefined,
    100
  )

  return (
    <div className={`Header ${isFixed ? 'absolute' : 'transparent'}`}>
      <div className="Header__Container">
        <div className="Header__Logo">
          <Link href="/">
            <a>
              <img src={`icons/logo-wtt${isFixed ? '-w' : ''}.svg`} />
            </a>
          </Link>
        </div>
        <nav className="Header__Navigation">
          <Link href="expertise">
            <a>About</a>
          </Link>
          <Link href="expertise">
            <a>Expertise</a>
          </Link>
          <Link href="work">
            <a>Work</a>
          </Link>
          <Link href="contact">
            <a>Contact</a>
          </Link>
        </nav>
        <div className="Search">
          <img src="./images/search.png" />
        </div>
      </div>
    </div>
  )
}

export default Header
