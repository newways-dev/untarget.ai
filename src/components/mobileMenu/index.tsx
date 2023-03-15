import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { ReactSVG } from 'react-svg'
import close from '../../assets/icons/close.svg'
import { setOpen } from '../../redux/mobileMenu/slice'
import { animateScroll as scroll } from 'react-scroll'
import styles from './MobileMenu.module.scss'
import { selectMenu } from '../../redux/mobileMenu/selector'

export const MobileMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { openMenu } = useSelector(selectMenu)

  const handleClick = (value: number) => {
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
          <li>
            <ScrollLink
              onClick={() => handleClick(0)}
              to='intro'
              duration={2200}
              offset={-150}
              smooth
            >
              Главная
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleClick(1450)}
              to='service'
              duration={2200}
              offset={-150}
              smooth
            >
              О сервисе
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleClick(!openMenu ? 5000 : 4850)}
              to='prices'
              duration={2200}
              offset={-150}
              smooth
            >
              Цены
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleClick(6000)}
              to='contacts'
              duration={2200}
              offset={-150}
              smooth
            >
              Контакты
            </ScrollLink>
          </li>
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
