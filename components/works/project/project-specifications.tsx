interface ProjectSpecificationsProps {
  technologies: string[];
  duration: string;
  efforts: string;
}

const ProjectSpecifications: React.FC<ProjectSpecificationsProps> = ({ technologies, duration, efforts }) => {
  return (
    <div className="specifications">
      <div className="specifications-technologies-block">
        <h4 className="specifications-technologies-block-title">Technologies</h4>
        {technologies.map((t) => <div className="item" key={t}>{t}</div>)}
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
  )
}
export default ProjectSpecifications;