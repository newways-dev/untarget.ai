import { ReactSVG } from 'react-svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'
import login from '../../assets/icons/login.svg'
import { selectMenu } from '../../redux/mobileMenu/selector'
import mobileMenu from '../../assets/icons/mobileMenu.svg'
import { setOpen } from '../../redux/mobileMenu/slice'
import { MobileMenu } from '../../components'
import styles from './Header.module.scss'

import logo from '../../assets/icons/logo.svg'

export const Header = () => {
  const { openMenu } = useSelector(selectMenu)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = (to: number) => {
    if (pathname !== '/') {
      navigate('/')
      scroll.scrollTo(to)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <ReactSVG
          onClick={() => {
            scroll.scrollToTop()
            navigate('/')
          }}
          className={styles.logo}
          src={logo}
        />
        <div className={styles.contacts}>
          <a href='tel:+7495147-70-38'>
            <p>+7 (495) 147-70-38</p>
          </a>
          <a href='mailto:info@untarget.ai'>
            <p>info@untarget.ai</p>
          </a>
        </div>
        <ul className={styles.links}>
          <li>
            <ScrollLink
              onClick={() => handleClick(0)}
              to='intro'
              duration={2000}
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
              duration={2000}
              offset={-150}
              smooth
            >
              О сервисе
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => handleClick(5000)}
              to='prices'
              duration={2000}
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
              duration={2000}
              offset={-150}
              smooth
            >
              Контакты
            </ScrollLink>
          </li>
          <li>
            <Link to='/statistics'>Статистика</Link>
          </li>
          {/* <li onClick={() => handleLink(1450)}>О сервисе</li>
          <li onClick={() => handleLink(5000)}>Цены</li>
          <li onClick={() => handleLink(6000)}>Контакты</li> */}
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
