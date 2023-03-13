import styles from './Statistics.module.scss'

export const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <iframe
        src='https://datalens.yandex/fz4vmlfn0lc86?_theme=dark'
        width='600'
        height='400'
        title='statistics'
      />
    </div>
  )
}
