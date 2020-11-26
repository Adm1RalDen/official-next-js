import Link from 'next/link'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface IHeader {
  bgColor?: string
  headerIsFixed?: boolean
  headerColor?: string
}

const Header: React.FC<IHeader> = (props: IHeader) => {
  const { headerIsFixed, headerColor } = props
  const router = useRouter()
  const currentRoute = router.pathname.slice(1)

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

  const routes = ['About', 'Expertise', 'Work', 'Contact']

  return (
    <div
      className={`Header ${
        headerIsFixed ? 'inContent' : isFixed ? 'absolute' : 'transparent'
      }`}
      style={headerColor ? { background: headerColor } : {}}
    >
      <div className="Header__Container">
        <div className="Header__Logo">
          <Link href="/">
            <a>
              <img
                src={`icons/logo-wtt${
                  isFixed && !headerIsFixed ? '-w' : ''
                }.svg`}
              />
            </a>
          </Link>
        </div>
        <nav className="Header__Navigation">
          {routes.map((r) => {
            return (
              <Link href={r.toLowerCase()}>
                <a
                  className={currentRoute === r.toLowerCase() ? 'selected' : ''}
                >
                  {r}
                </a>
              </Link>
            )
          })}
        </nav>
        <div className="Search">
          <img src="./images/search.png" />
        </div>
      </div>
    </div>
  )
}

export default Header
