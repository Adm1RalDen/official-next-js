import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import Meta from './layout-meta'

interface PageProps {
  children?: React.ReactNode
  className?: string
  bgColor?: string
  colorized?: boolean
}

const Layout: React.FC<PageProps> = (props: PageProps) => {
  const { className, bgColor, colorized } = props

  const color = bgColor ? bgColor : 'white'

  return (
    <>
      <Meta />
      <div className={`Layout${className ? ` ${className}` : ``}`}>
        <Header bgColor={colorized ? '' : color} />
        {props.children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
