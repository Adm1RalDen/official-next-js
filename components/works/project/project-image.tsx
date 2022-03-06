interface ProjectImageProps {
  image: string
  imageAlt: string
}

const ProjectImage = ({ image, imageAlt }: ProjectImageProps) => {
  return (
    <div className="image-block">
      <img src={image} alt={imageAlt} />
    </div>
  )
}
export default ProjectImage
