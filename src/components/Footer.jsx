import React from 'react'
import '../styles/footer.css'

export default function Footer() {

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

  return (
    <div className ="footer__wrapper">
<button className ="footer__button"
onClick={scrollUp}>UP</button>
<div className ="footer__info">
    <div className ="footer__adress"></div>
    <div className ="footer__adress"></div>
    <div className ="footer__adress"></div>
</div>

    </div>
  )
}
