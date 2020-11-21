interface Props {
  name?: string,
  className?: string,
}

export const Button: React.FC<any> = (props: Props) => {
  const { className } = props
  const finalClassName = [`Button`]

  if (className) finalClassName.push(className)

  return <button {...props} className={finalClassName.join(' ')}>{props?.name}</button>
}

export default Button
