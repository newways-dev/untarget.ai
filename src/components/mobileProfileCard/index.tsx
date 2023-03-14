import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './MobileProfileCard.module.scss'
import profile from '../../assets/images/avatar.jpg'

export interface MobileProfileCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MobileProfileCard = ({ className }: MobileProfileCardProps) => {
  return (
    <div className={clsx(styles.mobileProfileCard, className)}>
      <div className={styles.wrapper}>
        <img src={profile} alt='' />
        <p>FirstName LastName</p>
      </div>
    </div>
  )
}
