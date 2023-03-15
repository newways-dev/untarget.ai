import { ReactSVG } from 'react-svg'
import styles from './Discounts.module.scss'

import linkIcon from '../../../assets/icons/link.svg'
import partner from '../../../assets/icons/partner.svg'
import tinkoff from '../../../assets/icons/tinkoff-business.svg'
import bonus from '../../../assets/icons/bonus.svg'

export const Discount = () => {
  return (
    <div className={styles.discounts}>
      <div className={styles.discount}>
        <div className={styles.top}>
          <ReactSVG className={styles.link} src={linkIcon} />
          <p className={styles.title}>Скидка 5%</p>
        </div>
        <div className={styles.wrapper}>
          <p>
            Разместите в футоре сайта, защищаемого от кликфрода, ссылку и{' '}
            <span>получите 5% скидку</span> на защиту этого сайта.
          </p>
          <p>Ссылка для футора: </p>
          <p className={styles.code}>
            {
              '<span>Protected by <a href="https://www.untarget.ai/">Untarget.AI</a></span>'
            }
          </p>
        </div>
      </div>
      <div className={styles.program}>
        <div className={styles.top}>
          <ReactSVG className={styles.icon} src={partner} />
          <p className={styles.title}>Партнёрская программа</p>
        </div>
        <ul>
          <li>
            Агентское вознаграждение - <span>30% от затрат</span> на проверку
            рекламного трафика сайтов, подключенных по партнёрской ссылке.
          </li>
          <li>
            Срок действия - <span>бессрочно</span> (пока клиент оплачивает
            услуги сервиса вы получаете агентское вознаграждение).
          </li>
          <li>
            Периодичность выплаты - 1 раз в месяц, на расчётный счёт ИП/ЮЛ либо
            на счёт самозанятого ФЛ.
          </li>
          <li>
            Опционально возможно предоставление эквивалентной скидки на оплату
            услуг сервиса, если вы самостоятельно оплачиваете в интересах своего
            клиента или наличии взаимных договоренностей с клиентом. Сайты, по
            которым предоставляется скидка, не учитываются при расчёте
            агентского вознаграждения. Опция запрашивается отдельно через
            поддержку на сайте.
          </li>
        </ul>
      </div>
      <div className={styles.tinkoff}>
        <div className={styles.top}>
          <ReactSVG className={styles.icon} src={tinkoff} />
          <p className={styles.title}>+2 месяца бесплатной защиты</p>
        </div>
        <p>
          Откройте один из продуктов Тинькофф Бизнес по ссылке ниже и получите
          дополнительные <span>2 месяца бесплатной защиты</span> от скликивания
          рекламы.
        </p>
        <p className={styles.tinkoffText}>
          <strong>Тинькофф Бизнес</strong> — экосистема банковских продуктов для
          предпринимателей. Расчетный счет, бухгалтерия, эквайринг и зарплатный
          проект. Бесплатно первые 2 месяца, после — от <strong>490 ₽</strong> в
          месяц.
        </p>
        <ul>
          <li>РКО</li>
          <li>Регистрация ИП</li>
          <li>Выплаты самозанятым</li>
          <li>Интернет-эквайринг</li>
        </ul>
      </div>
      <div className={styles.bonus}>
        <div className={styles.top}>
          <ReactSVG className={styles.icon} src={bonus} />
          <p className={styles.title}>+5000 ₽ за публикацию</p>
        </div>
        <p>
          Получите <span>5000 ₽</span> на баланс за публикацию статьи об опыте
          использованиия сервиса в борьбе со скликиванием рекламы.{' '}
        </p>
      </div>
    </div>
  )
}
