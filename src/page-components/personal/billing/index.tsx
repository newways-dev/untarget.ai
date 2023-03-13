import styles from './Billing.module.scss'

export const Billing = () => {
  return (
    <div className={styles.billing}>
      <div className={styles.balance}>
        <div className={styles.top}>
          <p>Сумма *</p>
          <div className={styles.badges}>
            <input type='text' placeholder='0 ₽' />
            <div>500 ₽</div>
            <div>2500 ₽</div>
            <div>5000 ₽</div>
          </div>
        </div>
        <p>Отправить чек на адрес *</p>
        <input type='email' placeholder='Email' />
        <div className={styles.terms}>
          <div className={styles.termsWrapper}>
            <label className={styles.checkboxContainer}>
              <input type='checkbox' />
              <span className={styles.checkmark} />
            </label>
            <p>
              Пополнять ежемесячно, принимаю{' '}
              <span>Офферта регулярных платежей</span>
            </p>
          </div>
          <div className={styles.termsWrapper}>
            <label className={styles.checkboxContainer}>
              <input type='checkbox' />
              <span className={styles.checkmark} />
            </label>
            <p>Сохранить платежный идентификатор для оплаты в один клик</p>
          </div>
        </div>
        <div className={styles.button}>
          <button>Пополнить баланс</button>
          <p>
            Поделитесь, пожалуйста, своим опытом использования сервиса оставив{' '}
            <span>отзыв</span>
          </p>
        </div>
      </div>
    </div>
  )
}
