import { ReactSVG } from 'react-svg'

import visa from '../../assets/icons/visa.svg'
import master_card from '../../assets/icons/master-card.svg'
import mir from '../../assets/icons/mir.svg'
import ya_pay from '../../assets/icons/yandex-pay.svg'
import tinkoff from '../../assets/icons/tinkoff.svg'
import spb from '../../assets/icons/spb.svg'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>©2022 UNTARGET.AI</p>
      <div className={styles.top}>
        <ReactSVG className={styles.visa} src={visa} />
        <ReactSVG className={styles.master_card} src={master_card} />
        <ReactSVG className={styles.mir} src={mir} />
      </div>
      <div className={styles.bottom}>
        <ReactSVG className={styles.ya_pay} src={ya_pay} />
        <ReactSVG className={styles.tinkoff} src={tinkoff} />
        <ReactSVG className={styles.spb} src={spb} />
      </div>
    </footer>
  )
}
