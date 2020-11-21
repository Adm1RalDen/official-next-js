import Arrow from 'assets/icons/arrow.svg'

const Main: React.FC = () => {
  return (
    <div className="Main">
      <div className="Main__Head-image">
        <h1>
          software and <br /> development <br /> agency
        </h1>
        <Arrow className="Main__scroll-to-down" />
      </div>
      <div className="Main__welcome">
        <h3>WELCOME</h3>
        <p>
          Looking for a team to build a web, mobile or desktop application based
          on your idea?
        </p>
        <p>
          We have already completed more than 60 projects for our clients’
          businesses from the United States, Israel, Australia and Germany
        </p>
        <button className="Main__button">OUR EXPERTISE</button>
      </div>
    </div>
  )
}

export default Main
