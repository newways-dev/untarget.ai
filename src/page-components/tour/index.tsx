import stepOne from '../../assets/images/stepOne.webp'
import stepTwo from '../../assets/images/stepTwo.webp'
import stepThree from '../../assets/images/stepThree.webp'
import stepFour from '../../assets/images/stepFour.webp'
import styles from './Tour.module.scss'
import clsx from 'clsx'

export const Tour = () => {
  return (
    <div className={styles.tour} id='service'>
      <div className={styles.wrapper}>
        <p className={styles.title}>Тур по сервису</p>
        <p className={styles.desc}>
          Основная цель UNTARGET.AI повысить возврат инвестиций на рекламу
          (ROAS) наших клиентов. Для этого мы анализируем поведение посетителей
          защищаемого сайта в близком к реальному времени и в случае обнаружения
          клик фрода (click fraud) производим корректировку настроек учётной
          записи клиента в рекламной сети для уменьшения воздействия мошенников
          на выделенный бюджет. На данный момент сервисом поддерживается
          рекламная система Yandex Direct.
        </p>
        <div className={styles.step}>
          <div className={styles.info}>
            <p className={styles.stepTitle}>ШАГ 1</p>
            <p className={styles.stepDesc}>Регистрация, 1 мин.</p>
            <p className={styles.stepAbout}>
              Для создания личного кабинета необходимо зарегистрироваться. При
              регистрации нужно указать контактную информацию, ознакомиться с
              политикой конфиденциальности и пользовательским соглашением,
              нажать кнопку Зарегистрироваться.
            </p>
          </div>
          <img src={stepOne} alt='' />
        </div>
        <div className={clsx(styles.step, styles.stepTwo)}>
          <div className={styles.info}>
            <p className={styles.stepTitle}>ШАГ 2</p>
            <p className={styles.stepDesc}>Подключение защиты, 10 мин.</p>
            <p className={styles.stepAbout}>
              Для подключения сайта к защите в личном кабинете (ЛК) укажите
              домен и получите программный код. Его разместите* в HTML-код всех
              страниц сайта. После установки кода с защищаемого сайта будут
              поступать данные о поведении пользователей**. Защита от
              скликивания рекламы включится автоматически сразу после
              предоставления доступа к Yandex API***, часть алгоритмов включится
              после дообучения модели машинного обучения на поступающих с сайта
              данных.
            </p>
            <p className={styles.notes}>
              <span>
                * Аналогично размещению на сайт кода счётчика Яндекс Метрика,
                оказывает сопоставимое влияние на производительность сайта.
              </span>
              <span>
                ** Инфраструктура сервиса соответствует требованиям
                законодательства РФ к первому уровню защищённости персональных
                данных.
              </span>
              <span>
                *** В ЛК "в два клика" предоставляется доступ к{' '}
                <span>Yandex Direct</span>, <span>Yandex Metrica</span> и{' '}
                <span>Yandex Audience</span> (Аудитории). Сервис Аудитории
                используется для задействования в защите глобальных сегментов
                ранее заблокированных ботов и подозрительных посетителей, а
                также для построения сегментов, похожих на боты.
              </span>
            </p>
          </div>
          <img className={styles.stepTwoImg} src={stepTwo} alt='' />
        </div>
        <div className={clsx(styles.step, styles.stepThree)}>
          <div className={styles.info}>
            <p className={styles.stepTitle}>ШАГ 3</p>
            <p className={styles.stepDesc}>
              Анализ эффективности защиты, 30 мин.
            </p>
            <p className={styles.stepAbout}>
              Для анализа эффективности защиты сайта рекомендуем наблюдать за
              динамикой возврата расходов на рекламу (ROAS). В личном кабинете
              есть возможность приостановки/возобновления защиты сайта для
              анализа влияния сервиса на ключевые маркетинговые метрики. Первый
              месяц сервис предоставляется полностью бесплатно, за это время
              оцените целесообразность дальнейшего использования сервиса.
            </p>
          </div>
          <img src={stepThree} alt='' />
        </div>
        <div className={clsx(styles.step, styles.stepFour)}>
          <div className={styles.info}>
            <p className={styles.stepTitle}>ШАГ 4</p>
            <p className={styles.stepDesc}>Оплата, 3 мин.</p>
            <p className={styles.stepAbout}>
              После завершения пробного периода оплату услуг можно провести как
              в личном кабинете банковской картой, так и банковским переводом на
              расчётный счёт.
            </p>
          </div>
          <img src={stepFour} alt='' />
        </div>
      </div>
    </div>
  )
}
