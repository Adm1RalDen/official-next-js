import React from 'react'
import { skillsData } from './expertise-data'

const Skills = () => {
  return (
    <div className="Expertise-page__knowledges">
    {skillsData.map((el, i) => (
      <div className="Expertise-page__knowledges-wrapper" key={i}>
        <img src={el.img} alt="knw" />
        <div className="Expertise-page__knowledges-each">{el.value}</div>
      </div>
    ))}
  </div>
  )
}

export default Skills
