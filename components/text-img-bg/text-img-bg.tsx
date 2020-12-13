import React from 'react'
import { ITextImgBgProps, ITextItemProps } from './interface'

const TextImgBackground: React.FC<ITextImgBgProps> = (
  props: ITextImgBgProps
) => {
  return (
    <div className="text-img-bg__modal" style={{ backgroundImage: props.img }}>
      <div className="text-img-bg-overlay">{props.children}</div>
    </div>
  )
}

export const TextItem: React.FC<ITextItemProps> = (props: ITextItemProps) => (
  <span className="text-img-bg__text-item">{props.children}</span>
)

export default TextImgBackground
