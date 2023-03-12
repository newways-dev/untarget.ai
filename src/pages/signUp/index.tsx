import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import close from '../../assets/icons/close.svg'

import styles from './SignUp.module.scss'

export const SignUp = () => {
  const [userTemrs, setUserTerms] = useState<boolean>(false)
  const [confirmPolicy, setConfirmPolicy] = useState<boolean>(false)

  return (
    <div className={styles.signUp}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <ReactSVG className={styles.close} src={close} />
        </Link>
        <form>
          <p className={styles.title}>Регистрация</p>
          <input placeholder='Имя' type='text' />
          <input placeholder='Фамилия' type='text' />
          <input placeholder='Компания' type='text' />
          <input placeholder='Email' type='text' />
          <input placeholder='Придумайте пароль' type='password' />
          <input
            className={styles.promocode}
            placeholder='Промо код'
            type='text'
          />
          <div className={styles.terms}>
            <label className={styles.checkboxContainer}>
              <input onClick={() => setUserTerms(!userTemrs)} type='checkbox' />
              <span
                className={clsx(styles.checkmark, {
                  [styles.unchecked]: !userTemrs,
                })}
              />
            </label>
            <p>
              Я принимаю условия <span>Пользовательского соглашения</span>
            </p>
          </div>
          <div className={styles.terms}>
            <label className={styles.checkboxContainer}>
              <input
                onClick={() => setConfirmPolicy(!confirmPolicy)}
                type='checkbox'
              />
              <span
                className={clsx(styles.checkmark, {
                  [styles.unchecked]: !confirmPolicy,
                })}
              />
            </label>
            <p>
              Я даю своё согласие на обработку персональной информации на
              условиях, определенных <span>Политикой конфиденциальности</span>
            </p>
          </div>
          <div className={styles.checkbox}></div>
          <button>Зарегистрироваться</button>
          <p className={styles.signIn}>
            Уже зарегистрированы? <Link to='/sign-in'>Войти</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
