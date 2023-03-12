import styles from './Header.module.scss'
import logo from '../../assets/images/logo-transparent.png'
import login from '../../assets/icons/login.svg'
import { ReactSVG } from 'react-svg'
import { useDispatch, useSelector } from 'react-redux'
import { selectMenu } from '../../redux/mobileMenu/selector'
import mobileMenu from '../../assets/icons/mobileMenu.svg'
import { setOpen } from '../../redux/mobileMenu/slice'
import { MobileMenu } from '../../components'

export const Header = () => {
  const { openMenu } = useSelector(selectMenu)
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt='' />
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
          <li>
            <ReactSVG className={styles.login} src={login} />
            Вход
          </li>
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
