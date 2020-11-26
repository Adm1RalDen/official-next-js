import Link from 'next/link'
import Logo from 'assets/icons/logo-wtt-w.svg'

interface IHeader {
  bgColor?: string
}

const Header: React.FC<IHeader> = (props: IHeader) => {
  return (
    <div className="Header">
      <div className="Header__Container">
        <div className="Header__Logo">
          <img src="icons/logo-wtt-w.svg" />
        </div>
        <nav className="Header__Navigation">
          <Link href="about">
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
