import React from 'react'
import Button from '../_elements/button'
import { imgData, skillsData } from './expertise-data'
import World from '../../assets/icons/world.svg'

const ExpertisePage = () => {
  return (
    <div className="Expertise-page">
      <div className="Expertise-page__wrapper">
        <div className="Expertise-page__img-text">OUR EXPERTISE</div>
        <div className="Expertise-page__black-cover">
      </div>
        </div>
        <span className="Expertise-page__ww-do">What We Do</span>
        <span className="Expertise-page__explanation">
          We help startups and corporates develop world-class SaaS products:
          IOT, AI, Risks Assessment, HR/Membership, Marketing
        </span>
        <div className="Expertise-page__cards">
          {imgData.map((el) => (
            <div className="Expertise-page__cards-each">
              <div className="Expertise-page__svg">{el.img}</div>
              <div className="Expertise-page__tt-wrapper">
                <div className="Expertise-page__title">{el.title}</div>
                <div className="Expertise-page__text">{el.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="Expertise-page__knowledges">
          {skillsData.map((el) => (
            <div className="Expertise-page__knowledges-wrapper">
              {el.img}
              <div className="Expertise-page__knowledges-each">{el.value}</div>
            </div>
          ))}
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
