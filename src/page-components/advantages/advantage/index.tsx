import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Advantage.module.scss'

export interface AdvantageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: string
  title: string
  desc: string
}

export const Advantage = ({ price, title, desc }: AdvantageProps) => {
  return (
    <div className={styles.advantage}>
      <svg
        preserveAspectRatio='xMidYMid meet'
        data-bbox='35.244 43.122 128.742 114.555'
        viewBox='35.244 43.122 128.742 114.555'
        height='200'
        width='200'
        xmlns='http://www.w3.org/2000/svg'
        data-type='color'
        role='presentation'
        aria-hidden='true'
      >
        <defs>
          <style>#comp-kkf2pbhg1 svg [data-color="1"]</style>
        </defs>
        <g>
          <path
            d='M73.582 157.677l-38.338-41.111 55.825-52.053 24.275-2.781 18.529 19.874-4.467 24.019-.44.411-55.384 51.641zm-33.176-40.932l33.357 35.77 52.274-48.74 3.91-21.025-16.018-17.18-21.25 2.434-52.273 48.741zm71.162-26.878a5.995 5.995 0 0 1-4.419-1.921 5.986 5.986 0 0 1-1.615-4.325 6 6 0 0 1 1.914-4.203c2.429-2.268 6.255-2.135 8.528.296a6.045 6.045 0 0 1-.295 8.531l-.001.001a6.006 6.006 0 0 1-4.112 1.621zm-.006-8.417c-.582 0-1.165.211-1.622.638a2.371 2.371 0 0 0-.757 1.662 2.364 2.364 0 0 0 .637 1.706 2.365 2.365 0 0 0 1.659.758 2.342 2.342 0 0 0 1.709-.639 2.388 2.388 0 0 0 .118-3.37 2.383 2.383 0 0 0-1.744-.755z'
            fill='#181818'
            data-color='1'
          ></path>
          <path
            d='M111.57 93.736a9.891 9.891 0 0 1-7.253-3.147 9.84 9.84 0 0 1-2.657-7.103 9.847 9.847 0 0 1 3.147-6.902c1.936-1.805 4.458-2.736 7.103-2.656a9.847 9.847 0 0 1 6.902 3.147c3.724 3.995 3.503 10.277-.49 14.004a9.868 9.868 0 0 1-6.752 2.657zm-6.03-4.289c3.102 3.323 8.322 3.506 11.64.409 3.32-3.099 3.503-8.32.408-11.641a8.183 8.183 0 0 0-5.737-2.616 8.18 8.18 0 0 0-5.903 2.208 8.185 8.185 0 0 0-2.616 5.737 8.178 8.178 0 0 0 2.208 5.903z'
            fill='#181818'
            data-color='1'
          ></path>
          <path
            d='M111.826 85.394a1.826 1.826 0 0 1-1.739-2.385c.133-.416 3.353-10.261 10.175-16.347 5.283-4.712 11.718-5.661 17.941-6.579 9.477-1.398 17.662-2.605 22.247-15.779a1.827 1.827 0 0 1 3.45 1.2c-5.313 15.264-15.859 16.819-25.164 18.192-5.953.878-11.576 1.707-16.043 5.691-6.088 5.431-9.1 14.646-9.129 14.739a1.828 1.828 0 0 1-1.738 1.268z'
            fill='#181818'
            data-color='1'
          ></path>
        </g>
      </svg>
      <p className={styles.price}>{price}₽</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}
