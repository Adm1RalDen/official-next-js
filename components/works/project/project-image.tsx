interface ProjectImageProps {
  image: string;
  imageAlt: string;
}

interface DataProps {
  data: ProjectImageProps;
}

const ProjectImage: React.FC<DataProps> = ({ data: { image, imageAlt } }) => {
  return (
    <div className="image-block">
      <img src={image} alt={imageAlt} />
    </div>
  )
}
export default ProjectImage;