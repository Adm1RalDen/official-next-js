import { useState } from 'react'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { ScrollTo } from 'react-scroll-to'
import Meta from './layout-meta'

interface PageProps {
  children?: React.ReactNode
  className?: string
  bgColor?: string
  colorized?: boolean
  headerIsFixed?: boolean
  headerColor?: string
}

const Layout: React.FC<PageProps> = (props: PageProps) => {
  const { className, headerIsFixed, headerColor } = props
  const [isShow, setIsShow] = useState(false)

  useScrollPosition(
    ({ _, currPos }) => {
      if (currPos.y < -350) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    },
    [],
    undefined,
    undefined,
    100
  )

  return (
    <>
      <Meta />
      <div className={`Layout${className ? ` ${className}` : ``}`}>
        <Header headerIsFixed={headerIsFixed} headerColor={headerColor} />
        {props.children}
        <Footer />
        <ScrollTo>
          {({ scroll }) => (
            <div
              className={`Scroll-To-Top ${isShow ? 'show' : 'hide'}`}
              onClick={() => scroll({ x: 20, y: 0, smooth: true })}
            >
              Top
            </div>
          )}
        </ScrollTo>
      </div>
    </>
  )
}

export default Layout
