import React, { useEffect, useState } from 'react'
import handleViewport from 'react-in-viewport'
import { skillsData } from './expertise-data'

const Skills = () => {
  return (
    <div className="Expertise-page__knowledge">
      {skillsData.map((el, i) => (
        <SkillElement
          {...el}
          key={i}
          // onEnterViewport={() => console.log('enter')}
          // onLeaveViewport={() => console.log('leave')}
        />
      ))}
    </div>
  )
}

interface ISkillElementProps {
  img: string
  name: string
  inViewport: boolean
  forwardedRef: React.RefObject<HTMLDivElement>
  enterCount: number
}

const SkillElement = handleViewport(
  ({ img, name, inViewport, forwardedRef, enterCount }: ISkillElementProps) => {
    const [needRender, setNeedsRender] = useState(false)

    const className = [
      'Expertise-page__knowledge-wrapper',
      'Expertise-page__knowledge-wrapper-animated',
    ]

    useEffect(() => {
      if (inViewport && !needRender) {
        setNeedsRender(true)
      }
      // eslint-disable-next-line
    }, [inViewport, enterCount])

    return (
      <div ref={forwardedRef} className="Expertise-page__knowledge-container">
        {needRender ? (
          <div className={className.join(' ')}>
            <img src={img} alt="knw" />
            <div className="Expertise-page__knowledge-each">{name}</div>
          </div>
        ) : null}
      </div>
    )
  },
  {},
  {}
)

export default Skills
