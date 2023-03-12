import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'
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

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img
          onClick={() => scroll.scrollToTop()}
          className={styles.logo}
          src={logo}
          alt=''
        />
        <div className={styles.contacts}>
          <p>+7 (495) 147-70-38</p>
          <p>info@untarget.ai</p>
        </div>
        <ul className={styles.links}>
          <li>Главная</li>
          <li>О сервисе</li>
          <li>Цены</li>
          <li>Контакты</li>
          <li>Статистика</li>
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
