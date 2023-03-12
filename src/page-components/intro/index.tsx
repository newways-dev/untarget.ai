import styles from './Intro.module.scss'

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>UNTARGET.AI</h1>
      <p>
        Поможем увеличить возврат расходов на рекламу, защищая ваш сайт от
        кликфрода.
      </p>
      <button>Подключить защиту</button>
    </div>
  )
}
