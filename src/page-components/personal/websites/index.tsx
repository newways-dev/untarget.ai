import styles from './Websites.module.scss'

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
        <input type='text' />
        <button></button>
      </div>
    </div>
  )
}
