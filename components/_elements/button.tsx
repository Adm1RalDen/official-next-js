interface Props {
  name?: string
  className?: string
  size?: 'small' | 'big'
}

export const Button: React.FC<any> = (props: Props) => {
  const { className, size } = props
  const finalClassName = [`Button`]

  if (className) finalClassName.push(className)
  if (size) finalClassName.push(size)

  return (
    <button {...props} className={finalClassName.join(' ')}>
      {props?.name}
    </button>
  )
}

export default Button
