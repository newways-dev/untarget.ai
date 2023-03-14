import styles from './Statistics.module.scss'

export const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.blockedTime}>
        <iframe
          src='https://datalens.yandex/tcxbqdh4tfk4k?_theme=dark'
          width='600'
          height='400'
          title='blocked'
        />
        <iframe
          src='https://datalens.yandex/fz4vmlfn0lc86?_theme=dark'
          width='600'
          height='400'
          title='check-time'
        />
      </div>
      <iframe
        src='https://datalens.yandex/9sck83rce3280?_theme=dark'
        width='600'
        height='400'
        title='last-blocked'
      />
    </div>
  )
}
