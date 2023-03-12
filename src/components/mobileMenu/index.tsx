import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import close from '../../assets/icons/close.svg'
import { setOpen } from '../../redux/mobileMenu/slice'

import styles from './MobileMenu.module.scss'

export const MobileMenu = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.top}>
        <div className={styles.user}>
          <img src='' alt='' />
          <p>FirstName LastName</p>
        </div>
        <ReactSVG
          className={styles.close}
          onClick={() => dispatch(setOpen(false))}
          src={close}
        />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.links}>
          <li>Главная</li>
          <li>О сервисе</li>
          <li>Цены</li>
          <li>Контакты</li>
          <li>Статистика</li>
        </ul>
        <div className={styles.buttons}>
          <Link to='/sign-up'>
            <button className={styles.register}>Зарегистироваться</button>
          </Link>
          <Link to='/sign-in'>
            <button className={styles.login}>Войти</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
