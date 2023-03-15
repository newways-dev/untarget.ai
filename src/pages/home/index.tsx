import {
  Advantages,
  Contacts,
  Intro,
  Prices,
  Tour,
} from '../../page-components'
import background from '../../assets/images/background.webp'

import styles from './Home.module.scss'

export const Home = () => {
  return (
    <section className={styles.home}>
      <Intro />
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${background})` }}
      />
      <Tour />
      <Prices />
      <Advantages />
      <Contacts />
    </section>
  )
}
