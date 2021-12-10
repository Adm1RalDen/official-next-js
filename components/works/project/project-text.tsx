interface ProjectTextProps {
  siteURL: string
  title: string
  aimProject: string
  description: string
  disclose?: boolean
}
interface DataProps {
  data: ProjectTextProps
}

const ProjectText: React.FC<DataProps> = ({
  data: { siteURL, title, aimProject, description, disclose },
}: DataProps) => {
  return (
    <div className="text-block">
      <h3 className="text-block-title">
        {siteURL ? (
          <a href={siteURL} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
      </h3>
      <div className="descrition">
        <p className="descrition-aim">{aimProject}</p>
        <p className="description-main">{description}</p>
        {!disclose && <div className="disclose-block">Under NDA</div>}
      </div>
    </div>
  )
}
export default ProjectText
