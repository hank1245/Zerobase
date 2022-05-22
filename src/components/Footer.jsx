import styles from './style/Footer.module.css'
import {BsInstagram,BsFacebook,BsGithub} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'
import {useRecoilValue} from 'recoil';
import {darkModeState} from '../atoms/darkMode';

function Footer() {
  const isDarkMode = useRecoilValue(darkModeState)

  return (
      <>
        <footer className={isDarkMode ? styles.footer : styles.footer_light}>
            <p>제로베이스</p>
            <ul className={styles.creditcard}>
                <li><img src='/icons/visa.svg' alt="visa"/></li>
                <li><img src='/icons/mastercard.svg' alt="mastercard"/></li>
                <li><img src='/icons/paypal.svg' alt="paypal"/></li>
                <li><img src='/icons/cb.svg' alt="cb"/></li>
                <li><img src='/icons/american-express.svg' alt="americanexpress"/></li>
                <li><img src='/icons/discover.svg' alt="discover"/></li>
            </ul>
            <div className={styles.sns}>
                <BsFacebook size='36'/>
                <BsInstagram size='36'/>
                <BsGithub size='36'/>
            </div>
            <p>CopyRight <BiCopyright/> 2022 Zero Base</p>
        </footer>
      </>
  )
}

export default Footer