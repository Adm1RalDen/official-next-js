import React, { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'

export const AboutSlider: FC = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      transitionTime={150}
      showStatus={false}
      swipeable={true}
      infiniteLoop={true}
      renderIndicator={Indicator}
    >
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </Carousel>
  )
}

const Indicator = (
  onClickHandler: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void,
  isSelected: boolean,
  index: number
) => {
  const className = ['slider-indicator']
  if (isSelected) className.push('slider-indicator__selected')

  return (
    <div key={index} className={className.join(' ')} onClick={onClickHandler} />
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
