import TextImgBackground, { TextItem } from '@/components/text-img-bg/text-img-bg'
import React from 'react'

const Project1: React.FC = (props) => {
  const topText = ['management system', 'for delivery services']

  return (
    <div className='Project1-page'>
      <div className='Project1-page-heroImage'
      >
        <TextImgBackground img={'url(/project1/project1.jpeg)'}>
          {topText.map((el, idx) => (
            <TextItem key={idx}>{el}</TextItem>
          ))}
        </TextImgBackground>
      </div>
    </div>
  )
}

export default Project1
