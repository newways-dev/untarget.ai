import clsx from 'clsx'
import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'
import { Footer } from './footer'
import { Header } from './header'

import styles from './Layout.module.scss'

// interface LayoutProps {
//   children: ReactNode
// }

export const Layout = () => {
  return (
    <div className={clsx(styles.layout)}>
      <Header />
      {/* <main className={styles.main}>{children}</main> */}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
