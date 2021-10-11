import { URL_LIST } from './constants';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-cols">
        <ul>
          <li>
            <a href={URL_LIST.faq}>FAQ</a>
          </li>
          <li>
            <a href={URL_LIST.watchways}>Ways To Watch</a>
          </li>
          <li>
            <a href={URL_LIST.relations}>Investor Relations</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={URL_LIST.help}>Help Center</a>
          </li>
          <li>
            <a href={URL_LIST.terms}>Terms Of Use</a>
          </li>
          <li>
            <a href={URL_LIST.contact}>Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={URL_LIST.account}>Account</a>
          </li>
          <li>
            <a href={URL_LIST.privacy}>Privacy</a>
          </li>
          <li>
            <a href={URL_LIST.jobs}>Jobs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={URL_LIST.mediacenter}>Media Center</a>
          </li>
          <li>
            <a href={URL_LIST.giftcards}>Buy Gift Cards</a>
          </li>
          <li>
            <a href={URL_LIST.legalnotices}>Legal Notices</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
