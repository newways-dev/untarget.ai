import { ReactSVG } from 'react-svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/images/logo-transparent.png'
import login from '../../assets/icons/login.svg'
import { selectMenu } from '../../redux/mobileMenu/selector'
import mobileMenu from '../../assets/icons/mobileMenu.svg'
import { setOpen } from '../../redux/mobileMenu/slice'
import { MobileMenu } from '../../components'
import styles from './Header.module.scss'

export const Header = () => {
  const { openMenu } = useSelector(selectMenu)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLink = (value: number) => {
    if (pathname === '/') {
      scroll.scrollTo(value, 0)
    } else {
      navigate('/')
      scroll.scrollTo(value, 0)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img
          onClick={() => {
            scroll.scrollToTop()
            navigate('/')
          }}
          className={styles.logo}
          src={logo}
          alt=''
        />
        {/* <ReactSVG className={styles.logo} src={logo} /> */}
        <div className={styles.contacts}>
          <p>+7 (495) 147-70-38</p>
          <p>info@untarget.ai</p>
        </div>
        <ul className={styles.links}>
          <li onClick={() => handleLink(0)}>Главная</li>
          <li onClick={() => handleLink(1450)}>О сервисе</li>
          <li onClick={() => handleLink(5000)}>Цены</li>
          <li onClick={() => handleLink(6000)}>Контакты</li>
          <li>
            <Link to='/statistics'>Статистика</Link>
          </li>
          <Link to='/sign-up'>
            <li>
              <ReactSVG className={styles.login} src={login} />
              Вход
            </li>
          </Link>
        </ul>
        <ReactSVG
          onClick={() => dispatch(setOpen(true))}
          className={styles.mobileMenuIcon}
          src={mobileMenu}
        />
        {openMenu && <MobileMenu />}
      </div>
    </header>
  )
}
