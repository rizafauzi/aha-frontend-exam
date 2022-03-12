export interface IInput {
  value?: string | number
  onChange: () => void
  disabled?: boolean
  defaultValue?: string | number
  placeholder?: string
  className?: string
}
