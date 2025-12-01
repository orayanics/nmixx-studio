import styles from './Logo.module.css'
import LOGO from '@/assets/nmixx-logo.webp'

export default function Logo({ className }: { className?: string }) {
  return (
    <img
      className={`${styles['logo']} ${className}`}
      src={LOGO}
      height={26}
      width={62}
      alt="NMIXX Logo"
    />
  )
}
