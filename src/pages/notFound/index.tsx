import styles from './NotFound.module.scss'
import notFound from '../../assets/images/not-found.png'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src={notFound} alt='' />
      <Link to='/'>
        <button>На главную</button>
      </Link>
    </div>
  )
}
