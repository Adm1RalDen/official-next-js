import React from 'react'
import Button from '../_elements/button'
import { imgData } from './expertise-data'
import Skills from './skills'

const ExpertisePage = () => {
  return (
    <div className="Expertise-page">
      <div className="Expertise-page__wrapper">
        <div className="Expertise-page__img-text">OUR EXPERTISE</div>
        <div className="Expertise-page__black-cover"></div>
      </div>
      <div className="Expertise-page__top-text-wrapper">
        <span className="Expertise-page__ww-do">What We Do</span>
        <span className="Expertise-page__explanation">
          We help startups and corporates develop world-class SaaS products:
          IOT, AI, Risks Assessment, HR/Membership, Marketing
        </span>
      </div>
      <div className="Expertise-page__cards">
        {imgData.map((el) => (
          <div className="Expertise-page__cards-each" key={el.title}>
            <div className="Expertise-page__svg">
              <img src={el.img} alt="icn" />
            </div>
            <div className="Expertise-page__tt-wrapper">
              <div className="Expertise-page__title">{el.title}</div>
              <div className="Expertise-page__text">{el.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="animation-test">
        <Skills />
      </div>
      <div className="Expertise-page__last-block">
        <div className="Expertise-page__last-block-wws">WORKING WITH US</div>
        <div className="Expertise-page__last-block-text">
          We strive to meet your business goals through technology
          implementation.
        </div>
        <Button name="GET IN TOUCH" className="button1" />
      </div>
    </div>
  )
}

export default ExpertisePage

// {/* <div className="Expertise-page__knowledges">
//         {/* <DynamicComponentWithNoSSR/> */}
// </div> */}
