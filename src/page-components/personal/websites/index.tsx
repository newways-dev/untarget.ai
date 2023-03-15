import { ReactSVG } from 'react-svg'
import styles from './Websites.module.scss'
import copy from '../../../assets/icons/copy.svg'

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
        <div className={styles.wrapper}>
          <div className={styles.addInput}>
            <div className={styles.addInputWrapper}>
              <label htmlFor=''>Сайт *</label>
              <input type='text' placeholder='https://example.com' />
            </div>
            <button>Добавить</button>
          </div>
          <p className={styles.status}>В процессе...</p>
        </div>
      </div>
      <div className={styles.websitesList}>
        <p className={styles.listTitle}>Список сайтов</p>
        <div className={styles.websiteWrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.heading}>
              <p className={styles.name}>I am Whiskers</p>
              <p className={styles.desc}>
                Add your content to connect to a database
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.apiName}>
                  <strong>Yandex Metrica</strong>
                </span>
                <span>Mixed</span>
              </p>
              <p>
                <span className={styles.apiName}>
                  <strong>Yandex API</strong>
                </span>
                <span className={styles.status}>Подключен</span>
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <textarea />
            <ReactSVG className={styles.copyIcon} src={copy} />
            <button>Удалить</button>
          </div>
        </div>
        <div className={styles.websiteWrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.heading}>
              <p className={styles.name}>I am Whiskers</p>
              <p className={styles.desc}>
                Add your content to connect to a database
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.apiName}>
                  <strong>Yandex Metrica</strong>
                </span>
                <span>Mixed</span>
              </p>
              <p>
                <span className={styles.apiName}>
                  <strong>Yandex API</strong>
                </span>
                <span className={styles.status}>Подключен</span>
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <textarea />
            <ReactSVG className={styles.copyIcon} src={copy} />
            <button>Удалить</button>
          </div>
        </div>
        <div className={styles.websiteWrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.heading}>
              <p className={styles.name}>I am Whiskers</p>
              <p className={styles.desc}>
                Add your content to connect to a database
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                <span className={styles.apiName}>
                  <strong>Yandex Metrica</strong>
                </span>
                <span>Mixed</span>
              </p>
              <p>
                <span className={styles.apiName}>
                  <strong>Yandex API</strong>
                </span>
                <span className={styles.status}>Подключен</span>
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <textarea />
            <ReactSVG className={styles.copyIcon} src={copy} />
            <button>Удалить</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.line} />
        <div className={styles.text}>
          <p>
            {
              'Можно дополнительно повысить качество защиты включив в ссылки перехода по объявлению UTM-метки, пример: https://example.com/?utm_source=yandex&utm_medium=cpc&utm_campaign={campaign_id}&utm_content=phrase_id|{phrase_id}|gid|{gbid}|aid|{ad_id}|adp|{addphrases}&utm_term={keyword}&type={source_type}&source={source}'
            }
          </p>
          <p>
            Для удобства можно воспользоваться{' '}
            <a href='https://tilda.cc/ru/utm/' target='_blank' rel='noreferrer'>
              <span>генератором UTM меток</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
