import React from 'react'
import ProjectImage, { ProjectImageProps } from './project-image';
import ProjectSpecifications, { ProjectSpecificationsProps } from './project-specifications';
import ProjectText, { ProjectTextProps } from './project-text';

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

  const textProps: ProjectTextProps = { hrefWeb, title, aimProject, description, disclose };
  const imageProps: ProjectImageProps = { image, imageAlt };
  const specificationsProps: ProjectSpecificationsProps = { technologies, duration, efforts };

  return (
    <>
      <section className='Project-page'>
        <div className='Project-page-content-wrapper'>
          <div className="Project-page-content-container">
            <div className="Project-page-content">

              <ProjectText {...textProps} />

              <ProjectImage {...imageProps} />

              <ProjectSpecifications {...specificationsProps} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Project
