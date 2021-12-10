const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__section">
          <h3>COPYRIGHT</h3>
          <p>© WTT NoSolutions - 2020</p>
        </div>
        <div className="Footer__section">
          <h3>follow</h3>
          <a href="#" target="blank">
            Facebook
          </a>
        </div>
        <div className="Footer__section">
          <h3>contact</h3>
          <p>
            <a href="mailto:info@wtt-nosolutions.com">
              info@wtt-nosolutions.com
            </a>{' '}
            / +380 (97) 777-77-77
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
