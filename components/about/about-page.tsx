import React, { useRef, FC } from 'react'

import { Button } from '@/components/_elements/button'
import TextImgBackground, {
  TextItem,
} from '@/components/text-img-bg/text-img-bg'
import { AboutSlider } from '@/components/about/about-slider'
import { useCounting } from '../../utils/hooks'

import { AboutDetails } from './about-details'

export const AboutPage: FC = () => {
  const topText = ['great experiences', 'build great products']
  const infoCountingCards = [
    { count: 58, title: 'Awesome projects' },
    { count: 8, title: 'Countries' },
    { count: 14, title: 'People in team' },
    { count: 47, title: 'Clients' },
  ]

  return (
    <>
      <TextImgBackground img={'url(images/about-bg.jpg)'}>
        {topText.map((el, idx) => (
          <TextItem key={idx}>{el}</TextItem>
        ))}
      </TextImgBackground>
      <div className="about__container">
        <div className="about__wtt-solutions">
          <span className="about__wtt-solutions-title">
            About WTT Solutions
          </span>
          <AboutDetails />
        </div>
      </div>
      <div className="about__fixed-bg-block">
        <div className="about__fixed-bg-block-overlay">
          <div className="about__fixed-bg-block-text-container">
            <span>Turn your ideas and experience</span>
            <span>into a digital product</span>
            <span>with our team</span>
            <Button
              name="See our cases"
              className="about__fixed-bg-block-hidden-button"
            />
          </div>
        </div>
      </div>
      <div className="about__counting-info-container">
        {infoCountingCards.map((el) => (
          <InfoCard key={el.title + el.count} {...el} />
        ))}
      </div>
      <div className="about__comments">
        <div className="about__comments-content-container">
          <span className="about__comments-title">What our clients say</span>
          <AboutSlider />
        </div>
      </div>
      <div className="about__work-together-container">
        <div className="about__work-together-color-container">
          <div className="about__work-together-content">
            <span className="about__work-together-content-title">
              Let’s make outstanding work together
            </span>
            <span className="about__work-together-content-descr">
              We are always looking for exciting projects and meaningful
              relationships.
            </span>
            <Button
              name="get in touch"
              className="about__work-together-content-btn"
            />
          </div>
        </div>
      </div>
    </>
  )
}

interface IInfoCard {
  title: string
  count: number
}

const InfoCard = (props: IInfoCard) => {
  const counterRef = useRef(null)
  useCounting(counterRef, 0, props.count, 2000)

  return (
    <div className="info-card__block">
      <span className="info-card__counter" ref={counterRef}>
        0
      </span>
      <span className="info-card__title">{props.title}</span>
    </div>
  )
}
