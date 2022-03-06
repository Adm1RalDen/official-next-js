interface Props {
  name: string
  className?: string
  size?: 'small' | 'big'
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ className, size, onClick, name }) => {
  const finalClassName = [`Button`]

  if (className) finalClassName.push(className)
  if (size) finalClassName.push(size)

  return (
    <button className={finalClassName.join(' ')} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
