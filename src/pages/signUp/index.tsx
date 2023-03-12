import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import close from '../../assets/icons/close.svg'

import styles from './SignUp.module.scss'

export const SignUp = () => {
  return (
    <div className={styles.signUp}>
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
          <input className={styles.checkbox} type='checkbox' />
          <p>
            Я принимаю условия <span>Пользовательского соглашения</span>
          </p>
        </div>
        <div className={styles.terms}>
          <input className={styles.checkbox} type='checkbox' />
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
  )
}
