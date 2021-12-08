interface ProjectImageProps {
  image: string;
  imageAlt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = (props: ProjectImageProps) => {
  const { image, imageAlt } = props;
  return (
    <div className="image-block">
      <img src={image} alt={imageAlt} />
    </div>
  )
}
export default ProjectImage;