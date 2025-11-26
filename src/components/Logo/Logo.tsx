import styles from './Logo.module.css'
import LOGO from '@/assets/nmixx-logo.webp'

export default function Logo() {
  return (
    <img className={styles['logo']} width={100} src={LOGO} alt="NMIXX Logo" />
  )
}
