import { ReactSVG } from 'react-svg'
import styles from './ProfileCard.module.scss'

import profile from '../../assets/images/avatar.jpg'
import dots from '../../assets/icons/dots.svg'

export const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <img src={profile} alt='' />
      <p>FirstName LastName</p>
      <ReactSVG className={styles.dots} src={dots} />
    </div>
  )
}
