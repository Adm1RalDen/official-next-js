interface ProjectTextProps {
  hrefWeb: string;
  title: string;
  aimProject: string;
  description: string;
  disclose?: boolean;
}
interface DataProps {
  data: ProjectTextProps;
}

const ProjectText: React.FC<DataProps> = ({ data: { hrefWeb, title, aimProject, description, disclose } }) => {
  return (
    <div className="text-block">
      <div className="title"><h3>
        {
          hrefWeb
            ? <a href={hrefWeb} target='_blank' className='title_a'>{title}</a>
            : <span className='title_a'>{title}</span>
        }
      </h3></div>
      <div className="descrition">
        <div className="descrition-visio">
          <p className="descrition-visio-aim">{aimProject}</p>
          <p>{description}</p>
          {!disclose && <div className='disclose-block'>Do not disclose</div>}
        </div>
      </div>
    </div>
  )
}
export default ProjectText;