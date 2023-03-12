import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { selectMenu } from '../redux/mobileMenu/selector'
import { Footer } from './footer'
import { Header } from './header'
import styles from './Layout.module.scss'

export const Layout = () => {
  const { openMenu } = useSelector(selectMenu)

  return (
    <div className={clsx(styles.layout, { [styles.hideScroll]: openMenu })}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
