import clsx from 'clsx'
import { useState } from 'react'
import { ProfileCard } from '../../components'
import {
  AdvertisingStatistics,
  Billing,
  Discount,
  PersonalData,
  Visits,
  VisitsStatistics,
  Websites,
} from '../../page-components'
import { PERSONAL_PAGES } from '../../types/personalPages'
import styles from './Personal.module.scss'

export const Personal = () => {
  const [activePage, setActivePage] = useState<PERSONAL_PAGES>(
    PERSONAL_PAGES.Websites
  )

  return (
    <div className={styles.personal}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <ProfileCard />
          <div className={styles.links}>
            <ul>
              <li
                onClick={() => setActivePage(PERSONAL_PAGES.Websites)}
                className={clsx(styles.link, {
                  [styles.active]: activePage === PERSONAL_PAGES.Websites,
                })}
              >
                Сайты
              </li>
              <li
                onClick={() => setActivePage(PERSONAL_PAGES.Billing)}
                className={clsx(styles.link, {
                  [styles.active]: activePage === PERSONAL_PAGES.Billing,
                })}
              >
                Биллинг
              </li>
              <li
                onClick={() => setActivePage(PERSONAL_PAGES.Visits)}
                className={clsx(styles.link, {
                  [styles.active]: activePage === PERSONAL_PAGES.Visits,
                })}
              >
                Визиты
              </li>
              <li
                onClick={() => setActivePage(PERSONAL_PAGES.VisitsStatistics)}
                className={clsx(styles.link, {
                  [styles.active]:
                    activePage === PERSONAL_PAGES.VisitsStatistics,
                })}
              >
                Статистика визитов
              </li>
              <li
                onClick={() =>
                  setActivePage(PERSONAL_PAGES.AdvertisingStatistics)
                }
                className={clsx(styles.link, {
                  [styles.active]:
                    activePage === PERSONAL_PAGES.AdvertisingStatistics,
                })}
              >
                Статистика РК
              </li>
              <li
                onClick={() => setActivePage(PERSONAL_PAGES.Discounts)}
                className={clsx(styles.link, {
                  [styles.active]: activePage === PERSONAL_PAGES.Discounts,
                })}
              >
                Скидки и бонусы
              </li>
              <li
                onClick={() => setActivePage(PERSONAL_PAGES.PersonalData)}
                className={clsx(styles.link, {
                  [styles.active]: activePage === PERSONAL_PAGES.PersonalData,
                })}
              >
                Личные данные
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          {activePage === PERSONAL_PAGES.Websites && <Websites />}
          {activePage === PERSONAL_PAGES.Billing && <Billing />}
          {activePage === PERSONAL_PAGES.Visits && <Visits />}
          {activePage === PERSONAL_PAGES.VisitsStatistics && (
            <VisitsStatistics />
          )}
          {activePage === PERSONAL_PAGES.AdvertisingStatistics && (
            <AdvertisingStatistics />
          )}
          {activePage === PERSONAL_PAGES.Discounts && <Discount />}
          {activePage === PERSONAL_PAGES.PersonalData && <PersonalData />}
        </div>
      </div>
    </div>
  )
}
