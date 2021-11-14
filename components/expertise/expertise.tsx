import { useRouter } from 'next/router'
import React from 'react'
import Button from '../_elements/button'
import { imgData } from './expertise-data'
import Skills from './skills'

const ExpertisePage = () => {
  const router = useRouter()
  return (
    <div className="Expertise-page">
      <div className="Expertise-page__wrapper">
        <div className="Expertise-page__img-text">OUR EXPERTISE</div>
        <div className="Expertise-page__black-cover" />
      </div>
      <div className="Expertise-page__top-text-wrapper">
        <span className="Expertise-page__ww-do">What We Do</span>
        <span className="Expertise-page__explanation">
          We help startups and corporates develop world-class SaaS products:
          IOT, AI, Risks Assessment, HR/Membership, Marketing
        </span>
      </div>
      <div className="Expertise-page__cards">
        {imgData.map((el, i) => (
          <ImageComponent {...el} key={i} />
        ))}
      </div>
      <Skills />
      <div className="Expertise-page__last-block">
        <div className="Expertise-page__last-block-wws">WORKING WITH US</div>
        <div className="Expertise-page__last-block-text">
          We strive to meet your business goals through our experience and new
          technology implementation.
        </div>
        <Button
          name="GET IN TOUCH"
          className="button1"
          onClick={() => router.push('/contact')}
        />
      </div>
    </div>
  )
}

export default ExpertisePage

interface ImageComponentProps {
  title: string
  img: string
  text: string
}

const ImageComponent = ({ title, img, text }: ImageComponentProps) => (
  <div className="Expertise-page__cards-each" key={title}>
    <div className="Expertise-page__svg">
      <img src={img} alt="icn" />
    </div>
    <div className="Expertise-page__tt-wrapper">
      <div className="Expertise-page__title">{title}</div>
      <div className="Expertise-page__text">{text}</div>
    </div>
  </div>
)
