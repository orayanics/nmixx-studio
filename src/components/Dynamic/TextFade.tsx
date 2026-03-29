import styles from './TextFade.module.css'

interface TextFadeProps {
  position?: 'bottom-left' | 'bottom-right' | 'center'
  children?: React.ReactNode
  className?: string
  rounded?: boolean
}

export default function TextFade(props: TextFadeProps) {
  const {
    position = 'bottom-left',
    children,
    className,
    rounded = false,
  } = props
  return (
    <div
      className={`${styles['text-fade-container']} ${styles[position]} ${className || ''} ${rounded ? 'rounded-(--border-radius)' : ''}`}
    >
      <div className={styles['text-content']}>{children}</div>
    </div>
  )
}
