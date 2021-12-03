import React from 'react'
import { ScrollTo } from 'react-scroll-to'
import Arrow from '../../../assets/icons/arrow.svg'

export interface ProjectProps {
  technologies: string[];
  title: string;
  hrefWeb: string;
  aimProject: string;
  description: string;
  image: string;
  imageAlt: string;
  duration: string;
  efforts: string;
}

const Project: React.FC<ProjectProps> = (data) => {
  const { technologies, title, hrefWeb, aimProject, description, image, imageAlt, duration, efforts } = data;
  return (
    <>
      <section className='Project-page'>

        <div className='Project-page-heroImage'>
          <h2 className='Project-page-heroImage-title'>{title}</h2>
          <ScrollTo>
            {({ scroll }) => (
              <Arrow
                className="Main__scroll-to-down"
                onClick={() => scroll({ x: 20, y: window.innerHeight - 50, smooth: true })}
              />
            )}
          </ScrollTo>
        </div>

        <div className='Project-page-content-wrapper'>
          <div className="Project-page-content-container">
            <div className="Project-page-content">

              <div className="text-block">
                <div className="title"><h3><a href={hrefWeb} target='_blank'>{title}</a></h3></div>
                <div className="descrition">
                  <div className="descrition-visio">
                    <p>{aimProject}</p>  <br /> <p>{description}</p>
                  </div>
                </div>
              </div>


              <div className="image-block">
                <img src={image} alt={imageAlt} />
              </div>


              <div className="specifications">
                <div className="specifications-technologies-block">
                  <h4 className="specifications-technologies-block-title">Technologies</h4>
                  {technologies.map((t) => <div className="item"><span>{t}</span></div>)}
                </div>
                <div className="specifications-wrapper">
                  <div className="specifications-duration-block">
                    <h4>Duration</h4>
                    <span>{duration}</span>
                  </div>
                  <div className="specifications-efforts-block">
                    <h4>Efforts</h4>
                    <span>{efforts}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Project
