import styles from './Prices.module.scss'

export const Prices = () => {
  return (
    <div className={styles.prices}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Цены</p>
        <p className={styles.desc}>Платите по мере использования</p>
        <p className={styles.desc}>
          Без абонентской платы и минимальных платежей. Оплачиваете только
          проверку каждого рекламного визита на защищаемый сайт. Имеется
          партнерская программа.
        </p>
        <button>Подключить защиту</button>
      </div>
    </div>
  )
}
