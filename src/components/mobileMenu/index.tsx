import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import close from '../../assets/icons/close.svg'
import { setOpen } from '../../redux/mobileMenu/slice'
import { animateScroll as scroll } from 'react-scroll'
import styles from './MobileMenu.module.scss'

export const MobileMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLink = (value: number) => {
    if (pathname === '/') {
      scroll.scrollTo(value, 0)
      dispatch(setOpen(false))
    } else {
      dispatch(setOpen(false))
      navigate('/')
      scroll.scrollTo(value, 0)
    }
  }

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
          <li onClick={() => handleLink(0)}>Главная</li>
          <li onClick={() => handleLink(1400)}>О сервисе</li>
          <li onClick={() => handleLink(5000)}>Цены</li>
          <li onClick={() => handleLink(6300)}>Контакты</li>
          <li onClick={() => dispatch(setOpen(false))}>
            <Link to='/statistics'>Статистика</Link>
          </li>
        </ul>
        <div className={styles.buttons}>
          <Link onClick={() => dispatch(setOpen(false))} to='/sign-up'>
            <button className={styles.register}>Зарегистироваться</button>
          </Link>
          <Link onClick={() => dispatch(setOpen(false))} to='/sign-in'>
            <button className={styles.login}>Войти</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
