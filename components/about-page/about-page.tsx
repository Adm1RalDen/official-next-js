import TextImgBackground, {
  TextItem,
} from '@/components/text-img-bg/text-img-bg'
import React, { useRef } from 'react'
import { useMouseOver } from '../../utils/hooks'

export const AboutPage = () => {
  const topText = ['great experiences', 'build great products']

  const hoverRef = useRef<HTMLDivElement>(null)
  const isOver = useMouseOver(hoverRef.current)

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
      <div className="about__fixed-bg-block" ref={hoverRef}>
        <div className="about__fixed-bg-block-overlay">
          <div className="about__fixed-bg-block-text-container">
            <span>Turn your ideas and experience</span>
            <span>into a digital product</span>
            <span>with our team</span>
          </div>
        </div>
      </div>
    </>
  )
}

const AboutDetails = () => (
  <div className="about__wtt-solutions-details">
    <p>Quality comes first.</p>
    <p>
      We provide the same result for each unique project – a highly
      professional, user-friendly and modern product in the end.
    </p>
    <p>Quality comes first.</p>
    <p>
      WTT Solution is not a company that just wants to make money, but values
      consumer’s time and gives the quality product at the end. We have gathered
      passionate developers and designers who are willing to help you turn your
      ideas into reality.
    </p>
    <p>
      Over the past 4 years, we realized that each project means much more than
      just material success because this is a participation in the realization
      of my customer’s vision. We are a client-centric company where you will
      not see banal phrases and annoying selling content.
    </p>
    <p>WE WANT:</p>
    <ol type="1">
      <li>&emsp;1. Understand the client’s needs and vision;</li>
      <li>&emsp;2. Give maximum value;</li>
      <li>&emsp;3. Be reliable;</li>
    </ol>
    <p>
      We are incredibly pleased to see the results of our work, which help our
      clients reach 10 times more customers and expand the boundaries of their
      businesses.
    </p>
    <p>
      Our goal is to help as many people as possible achieve their goals through
      the implementation of technology!
    </p>
    <p>Technology is the way to your success!</p>
  </div>
)
