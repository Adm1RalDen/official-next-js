import React from 'react'
import ProjectImage from './project-image';
import ProjectSpecifications from './project-specifications';
import ProjectText from './project-text';

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
  disclose?: boolean;
}

const Project: React.FC<ProjectProps> = (data) => {
  const { technologies, title, hrefWeb, aimProject, description, image, imageAlt, duration, efforts, disclose = true } = data;
  return (
    <>
      <section className='Project-page'>
        <div className='Project-page-content-wrapper'>
          <div className="Project-page-content-container">
            <div className="Project-page-content">
              <ProjectText hrefWeb={hrefWeb} title={title} aimProject={aimProject} description={description} disclose={disclose} />
              <ProjectImage image={image} imageAlt={imageAlt} />
              <ProjectSpecifications technologies={technologies} duration={duration} efforts={efforts}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Project
