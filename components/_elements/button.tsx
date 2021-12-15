interface Props {
  name?: string
  className?: string
  size?: 'small' | 'big'
  onClick?: () => void
}

export const Button: React.FC<Props> = (props: Props) => {
  const { className, size } = props
  const finalClassName = [`Button`]

  if (className) finalClassName.push(className)
  if (size) finalClassName.push(size)

  return (
    <button
      {...props}
      className={finalClassName.join(' ')}
      onClick={props.onClick}
    >
      {props?.name}
    </button>
  )
}

export default Button
