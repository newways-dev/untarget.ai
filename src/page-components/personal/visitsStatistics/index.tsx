import styles from './VisitsStatistics.module.scss'

export const VisitsStatistics = () => {
  return (
    <div className={styles.visitsStatistics}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Статистика визитов сайта</p>
        <select>
          <option disabled value=''>
            Выберите сайт
          </option>
          <option value=''>сайт1</option>
          <option value=''>сайт2</option>
        </select>
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
