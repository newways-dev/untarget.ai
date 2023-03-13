import styles from './Billing.module.scss'

export const Billing = () => {
  return (
    <div className={styles.billing}>
      <div className={styles.balance}>
        <div className={styles.top}>
          <p>Сумма *</p>
          <div>
            <input type='text' placeholder='0 ₽' />
            <div>500 ₽</div>
            <div>2500 ₽</div>
            <div>5000 ₽</div>
          </div>
          <p>Отправить чек на адрес *</p>
          <input type='email' placeholder='Email' />
          <div className={styles.terms}></div>
          <div>
            <button>Пополнить баланс</button>
            <p>
              Поделитесь, пожалуйста, своим опытом использования сервиса оставив
              <span>отзыв</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
