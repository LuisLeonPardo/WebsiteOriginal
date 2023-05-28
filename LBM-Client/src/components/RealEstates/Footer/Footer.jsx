import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../../Landing/assets/logo.svg";
import css from "./Footer.module.css";
import pdf from "../../Landing/assets/LBM-whitepaper.pdf";
import { networks } from "../../Landing/networks";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <img src={logo} alt="Libertum" className={ css.image}/>
      <div className={css.text}>
        <p>
          Libertum is a decentralized finance algorithmic money market protocol
          that seeks to make DeFi adoption more friendly with real collaterals.
        </p>
        <i>© 2023 Libertum Protocol</i>
      </div>

      <div className={css.links}>
        <div className={css.navigation}>
          <Link to="/">HOME</Link>
          <Link
            to={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="LBM-whitepaper.pdf"
          >
            WHITEPAPER
          </Link>
          <Link to="/">PRODUCT</Link>
        
          <a
            href="https://discord.com/invite/cAB2MKRw7b"
            target="_blank"
            rel="noreferrer"
          >
            I WANT TO BE PART
          </a>
        </div>
        <div className={css.socialmedia}>
          {networks.map(({ net, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={net} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
