import clsx from 'clsx'
import styles from './Visits.module.scss'

export const Visits = () => {
  return (
    <div className={styles.visits}>
      <div className={styles.wrapper}>
        <div className={styles.select}>
          <p className={styles.title}>Последние визиты сайта</p>
          <select>
            <option disabled value=''>
              Выберите сайт
            </option>
            <option value=''>сайт1</option>
            <option value=''>сайт2</option>
          </select>
        </div>
        <div className={styles.checkboxSection}>
          <label className={styles.checkboxContainer}>
            <input type='checkbox' />
            <span className={clsx(styles.checkmark)} />
          </label>
          <p>выделить подозрительные визиты</p>
        </div>
      </div>
      <iframe
        title='vistStat'
        src='https://datalens.yandex/q74c6qjfw7haj?43f87710-33ca-11ec-bbc5-d377a1cfd6bd=&_theme=dark'
        width='600'
        height='400'
      />
    </div>
  )
}
