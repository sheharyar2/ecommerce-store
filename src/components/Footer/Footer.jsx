import styles from './Footer.module.css';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pinterest_icon from '../assets/pintester_icon.png';
import whatsApp_icon from '../assets/whatsapp_icon.png';

function Footer()
{
    return(
        <div className={styles.footer}>
            <div className={styles.footer_logo}>
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>

            </div>
            <ul className={styles.footer_links}>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className={styles.footer_social_icon}>
                <div className={styles.footer_icons_container}>
                   <img src={instagram_icon} alt="" /> 
                </div>
                <div className={styles.footer_icons_container}>
                   <img src={pinterest_icon} alt="" /> 
                </div>
                <div className={styles.footer_icons_container}>
                   <img src={whatsApp_icon} alt="" /> 
                </div>
            </div>
            <div className={styles.footer_copyright}>
                    <hr />
                    <p>Copyright @ 2024 , All rights reserved</p>
                </div>
        </div>
    )
}
export default Footer;