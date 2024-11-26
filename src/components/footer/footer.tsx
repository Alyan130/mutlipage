import "./footer.css";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaComments } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="logo">
          
        </div>
        <nav className="nav-links">
          <Link href="/">MAIN</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/buynow">BUY NOW</Link>
     </nav>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaComments />
        </div>
      </div>
      
      <div className="bottom-section">
        <p>All Rights Reserved © myWebsite</p>
        <div className="footer-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICES</a>
          <a href="#">CODE OF CONDUCT</a>
        </div>
      </div>
    </footer>
  );
}
