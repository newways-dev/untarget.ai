import phone from '../../assets/images/phone.jpg'
import email from '../../assets/images/email.jpg'
import telegram from '../../assets/images/telegram.jpg'
import facebook from '../../assets/images/facebook.jpg'
import twitter from '../../assets/images/twitter.jpg'

import styles from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <p className={styles.title}>Контакты</p>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.item}>
            <img src={phone} alt='' />
            <p>+7 (495) 147-70-38</p>
          </div>
          <div className={styles.item}>
            <img src={email} alt='' />
            <p>info@untarget.ai</p>
          </div>
          <div className={styles.item}>
            <img src={telegram} alt='' />
            <p>untarget.ai</p>
          </div>
        </div>
        <div className={styles.social}>
          <div>
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
          </div>
          <button className={styles.fbShare}>
            <div>
              <span className={styles.icon} />
              <span className={styles.text}>Share</span>
            </div>
          </button>
          <iframe
            className={styles.vkShare}
            data-src=''
            title='VK Share'
            src='https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/media/VKShare.0135e4ff.html?layout=Button&amp;text=Share&amp;id=comp-kkrx3c26&amp;url=http%3A%2F%2Fadmin099221.wixsite.com%2Funtargetai'
          />
        </div>
      </div>
    </div>
  )
}
