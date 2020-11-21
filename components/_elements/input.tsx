interface Props {
  onChange?: any // eslint-disable-line
  value?: string
  className?: string
  name?: string
  placeholder?: string
  type?: string
  required?: boolean
  pattern?: string
  minLength?: number
  maxLength?: number
}

export const Input: React.FC<Props> = (props: Props) => {
  const { className } = props
  const finalClassName = [`Input`]

  if (className) finalClassName.push(className)

  return <input {...props} className={finalClassName.join(' ')} />
}

export default Input
