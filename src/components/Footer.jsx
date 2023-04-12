import React from 'react'
import '../styles/footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

  return (
    <div className ="footer__wrapper" name="contact">
<button className ="footer__button"
onClick={scrollUp}>UP</button>
<div className ="footer__info">
    <div className ="footer__adress">ul. Konwaliowa 8, Poznań<br/><span className ="footer__phone">tel. 555 222 115</span></div>
  <hr/>
    <div className ="footer__media">
<hr></hr>
    <div className ="footer__media--item"><FaFacebook/></div>
    <div className ="footer__media--item"><FaInstagram/></div>
    <div className ="footer__media--item"><FaYoutube/></div>
    </div>
</div>
    </div>
  )
}
