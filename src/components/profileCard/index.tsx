import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './ProfileCard.module.scss'

import profile from '../../assets/images/avatar.jpg'
import dots from '../../assets/icons/dots.svg'

export interface ProfileCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  return (
    <div className={clsx(styles.profileCard, className)}>
      <img src={profile} alt='' />
      <p>FirstName LastName</p>
      <ReactSVG className={styles.dots} src={dots} />
    </div>
  )
}
