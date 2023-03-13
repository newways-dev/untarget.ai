import styles from './PersonalData.module.scss'

export const PersonalData = () => {
  return (
    <div className={styles.personalData}>
      <div className={styles.account}>
        <div className={styles.text}>
          <p className={styles.title}>Мой аккаунт</p>
          <p className={styles.desc}>
            Посмотрите и отредактируйте сведения о себе
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.reset}>Сбросить</button>
          <button className={styles.update}>Обновить</button>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>Аккаунт</p>
        <p className={styles.desc}>Обновите личную информацию</p>
        <p className={styles.emailTitle}>Эл. почта для входа:</p>
        <p className={styles.emailShow}>test@gmail.com</p>
        <p className={styles.emailDesc}>
          Адрес эл. почты, используемый для входа, нельзя изменить
        </p>
        <div className={styles.fields}>
          <div className={styles.name}>
            <label htmlFor='name'>Имя</label>
            <input placeholder='Firstname' type='text' />
          </div>
          <div className={styles.lastname}>
            <label htmlFor='name'>Фамилия</label>
            <input placeholder='Lastname' type='text' />
          </div>
          <div className={styles.email}>
            <label htmlFor='name'>Эл. почта *</label>
            <input placeholder='test@gmail.com' type='text' />
          </div>
          <div className={styles.phone}>
            <label htmlFor='name'>Телефон</label>
            <input type='text' />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.reset}>Сбросить</button>
          <button className={styles.update}>Обновить</button>
        </div>
      </div>
    </div>
  )
}
