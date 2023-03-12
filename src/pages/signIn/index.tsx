import { ReactSVG } from 'react-svg'
import styles from './SignIn.module.scss'
import close from '../../assets/icons/close.svg'
import { Link } from 'react-router-dom'

export const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Link to='/'>
        <ReactSVG className={styles.close} src={close} />
      </Link>
      <div className={styles.wrapper}>
        <p className={styles.title}>Войти</p>
        <p className={styles.signUp}>
          Впервые на сайте?
          <Link to='/sign-up'>
            <span>Зарегистрироваться</span>
          </Link>
        </p>
        <form>
          <label htmlFor='email'>Эл. почта</label>
          <input type='text' id='email' />
          <label htmlFor='password'>Пароль</label>
          <input type='password' id='password' />
          <p className={styles.forgotPassword}>Не помню пароль</p>
          <button>Войти</button>
        </form>
      </div>
    </div>
  )
}
