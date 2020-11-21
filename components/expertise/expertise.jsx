import React from 'react'
import Button from '../_elements/button'
import { imgData, skillsData } from './expertise-data'

const ExpertisePage = () => {
  return (
    <div className="Expertise-page">
      <div className="Expertise-page__img-text">OUR EXPERTISE</div>
      <div className="Expertise-page__black-cover">
        <div className="Contact-page__img"></div>
      </div>
      <span>What We Do</span>
      <br />
      <span>
        We help startups and corporates develop world-class SaaS products: IOT,
        AI, Risks Assessment, HR/Membership, Marketing
      </span>
      {imgData.map((el) => (
        <div>
          {el.title}
          {el.text}
        </div>
      ))}
      {skillsData.map((el) => (
        <div>{el}</div>
      ))}
      <div>WORKING WITH US</div>
      <div>
        We strive to meet your business goals through technology implementation.
      </div>
      <Button name="GET IN TOUCH" />
    </div>
  )
}

export default ExpertisePage
