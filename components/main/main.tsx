import Arrow from 'assets/icons/arrow.svg'
import Link from 'next/link'
import { ScrollTo } from 'react-scroll-to'
// import HeaderBackgound from 'assets/backgrounds/background.svg'
import WorkCard from '../work-card/work-card'
import Button from '../_elements/button'
import { WorkDataList } from './work-list-data'

const Main: React.FC = () => {
  return (
    <div className="Main">
      <div className="Main__Head-image">
        {/* <HeaderBackgound /> */}
        <h1>
          software and <br /> development <br /> agency
        </h1>
        <ScrollTo>
          {({ scroll }) => (
            <Arrow
              className="Main__scroll-to-down"
              onClick={() => scroll({ x: 20, y: 1000, smooth: true })}
            />
          )}
        </ScrollTo>
      </div>
      <div className="Main__welcome">
        <div className="Main__welcome-container ">
          <h3>WELCOME</h3>
          <p>
            Looking for a team to build a web, mobile or desktop application
            based on your idea?
          </p>
          <p>
            We have already completed more than 60 projects for our clients’
            businesses from the United States, Israel, Australia and Germany
          </p>
          <Link href="expertise">
            <a>
              <button className="Main__button">OUR EXPERTISE</button>
            </a>
          </Link>
        </div>
      </div>
      <div className="Main__works-card-list">
        {WorkDataList.map((elem) => (
          <WorkCard {...elem} key={elem.workName + Math.random()} />
        ))}
      </div>
      <div className="Main__working-with-us">
        <h2>WORKING WITH US</h2>
        <p>We work for you by working with you.</p>
        <p>Client satisfaction and quality work are our top priorities.</p>
        <Link href="contact">
          <a>
            <Button name="get in touch" size="small" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Main
