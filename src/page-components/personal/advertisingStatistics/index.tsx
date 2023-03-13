import { ReactSVG } from 'react-svg'
import styles from './AdvertisingStatistics.module.scss'
import telegram from '../../../assets/icons/telegram-button.svg'
import image from '../../../assets/images/dashboard-example.png'

export const AdvertisingStatistics = () => {
  return (
    <div className={styles.advertisingStatistics}>
      <p className={styles.title}>Статистика рекламных компаний</p>
      <p className={styles.desc}>
        Дашборд включается по запросу в <span>&nbsp;поддержку</span>
        <button>
          <ReactSVG src={telegram} />
        </button>
      </p>
      <p className={styles.example}>Пример дашборда</p>
      <img src={image} alt='' />
    </div>
  )
}
