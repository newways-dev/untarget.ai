import phone from '../../assets/images/phone.jpg'
import email from '../../assets/images/email.jpg'
import telegram from '../../assets/images/telegram.jpg'
import facebook from '../../assets/images/facebook.jpg'
import twitter from '../../assets/images/twitter.jpg'
import styles from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={styles.contacts} id='contacts'>
      <p className={styles.title}>Контакты</p>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.item}>
            <a href='tel:+7495147-70-38'>
              <img src={phone} alt='' />
              <p>+7 (495) 147-70-38</p>
            </a>
          </div>
          <div className={styles.item}>
            <a href='mailto:info@untarget.ai'>
              <img src={email} alt='' />
              <p>info@untarget.ai</p>
            </a>
          </div>
          <div className={styles.item}>
            <a href='https://t.me/untarget_ai' target='_blank' rel='noreferrer'>
              <img src={telegram} alt='' />
              <p>untarget.ai</p>
            </a>
          </div>
        </div>
        <div className={styles.social}>
          <div>
            <a
              href='https://www.facebook.com/untarget.ai'
              target='_blank'
              rel='noreferrer'
            >
              <img src={facebook} alt='' />
            </a>
            <a
              href='https://twitter.com/untarget.ai'
              target='_blank'
              rel='noreferrer'
            >
              <img src={twitter} alt='' />
            </a>
          </div>
          <button
            className={styles.fbShare}
            onClick={() => {
              window.open(
                'http://www.facebook.com/sharer.php?u=' +
                  encodeURIComponent('u'),
                'wix_share_to_facebook',
                'width = 635, height = 346'
              )
            }}
          >
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
