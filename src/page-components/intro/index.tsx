import { Link } from 'react-router-dom'
import styles from './Intro.module.scss'

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>UNTARGET.AI</h1>
      <p>
        Поможем увеличить возврат расходов на рекламу, защищая ваш сайт от
        кликфрода.
      </p>
      <Link to='/sign-up'>
        <button>Подключить защиту</button>
      </Link>
    </div>
  )
}
