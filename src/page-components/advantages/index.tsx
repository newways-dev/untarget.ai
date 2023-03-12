import { Advantage } from './advantage'
import styles from './Advantages.module.scss'

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <Advantage
        price='0'
        title='1-й месяц'
        desc='Вне зависимости от трафика.'
      />
      <Advantage
        price='1'
        title='За рекламный визит'
        desc='Первые 100 визитов по рекламе в течение суток.'
      />
      <Advantage
        price='0,5'
        title='За рекламный визит'
        desc='Начиная с 101-го и до 500-го рекламного визита в течение суток.'
      />
      <Advantage
        price='0,25'
        title='За рекламный визит'
        desc='Начиная с 501-го рекламного визита в течение суток.'
      />
    </div>
  )
}
