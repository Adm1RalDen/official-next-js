import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export const AboutSlider = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      transitionTime={150}
      showStatus={false}
      swipeable={true}
      infiniteLoop={true}
    >
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </Carousel>
  )
}

const Slide = () => (
  <div className="slide__container">
    <img src="images/comment.svg" className="slide__content-icon" />
    <div className="slide__content-wrapper">
      <span className="slide__content-title">
        Data exchange solution between clinics and data centers
      </span>
      <span className="slide__content-description">
        It has been a pleasing experience working with Serhii. He works to make
        his schedule work with ours. We worked together on a project for almost
        a year and he was always there when needed.
      </span>
      <span className="slide__content-author">
        Lynn Tietjen - Director of Infrastructure at NAVEX Global, the United
        States
      </span>
    </div>
  </div>
)
