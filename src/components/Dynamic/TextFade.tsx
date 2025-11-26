import styles from './TextFade.module.css'

interface TextFadeProps {
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center'
  children?: React.ReactNode
  className?: string
}

export default function TextFade(props: TextFadeProps) {
  const { position = 'top-left', children, className } = props

  return (
    <div
      className={`${styles['text-fade-container']} ${styles[position]} ${className || ''}`}
    >
      <div className={styles['text-content']}>{children}</div>
    </div>
  )
}
