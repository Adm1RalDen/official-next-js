import { FunctionComponent } from 'react'

interface IProps {
  onChange?: (props: unknown) => void
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

// eslint-disable-next-line react/prop-types
const Textarea: FunctionComponent<IProps> = ({ className, ...props }) => {
  const finalClassName = [`Textarea`]

  if (className) finalClassName.push(className)

  return <textarea {...props} className={finalClassName.join(' ')} />
}

export default Textarea
