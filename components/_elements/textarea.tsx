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

export const Textarea: React.FC<Props> = (props: Props) => {
  const { className } = props
  const finalClassName = [`Textarea`]

  if (className) finalClassName.push(className)

  return <textarea {...props} className={finalClassName.join(' ')} />
}

export default Textarea
