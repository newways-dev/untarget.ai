import { ReactSVG } from 'react-svg'
import styles from './Websites.module.scss'
import copy from '../../../assets/icons/copy.png'

export const Websites = () => {
  return (
    <div className={styles.websites}>
      <p className={styles.title}>Добавьте сайт</p>
      <div className={styles.border}>
        <p>Введите адрес сайта и нажмите кнопку Добавить.</p>
      </div>
      <p className={styles.title}>
        Установите <span>JS</span> код на сайт
      </p>
      <div className={styles.border}>
        <p>
          Из списка ниже, скопируйте JS код и установите в HTML-код сайта.
          Разместите код, в пределах тегов {'<head></head>.'} Например, рядом с
          кодом счётчика Яндекс Метрика.
        </p>
      </div>
      <p className={styles.title}>
        Предоставьте доступа к <span>Yandex API</span>
      </p>
      <div className={styles.border}>
        <p>
          Добавленный сайт будет иметь состояние "Ожидание Yandex API".
          Необходимо кликнуть по ссылке "Подтвердить доступ". Произойдёт
          переадресация на сайт яндекса с детальной информацией о
          предоставляемых правах. После подтверждениея состояние изменится на
          "Подключен".
        </p>
      </div>
      <div className={styles.addWebsite}>
        <div>
          <label htmlFor=''>Сайт *</label>
          <input type='text' />
        </div>
        <button>Добавить</button>
      </div>
      <div className={styles.websitesList}>
        <p>Список сайтов</p>
        <div>
          <div>
            <p className={styles.title}>I am Whiskers</p>
            <p>Add your content to connect to a database</p>
          </div>
          <div>
            <p>
              <span className={styles.title}>Yandex Metrica</span>
              <span className={styles.status}>Mixed</span>
            </p>
            <p>
              <span className={styles.title}>Yandex API</span>
              <span className={styles.status}>Подключен</span>
            </p>
          </div>
          <div>
            <textarea />
            <ReactSVG src={copy} />
            <button>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
