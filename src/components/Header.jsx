import React, {useState} from 'react'
import '../styles/header.css'
import brush from '../assets/brush.jpg'
import nails from '../assets/nails.jpg'
import nails2 from '../assets/nails2.jpg'
import oils from '../assets/oils.jpg'


export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <div className ="header__wrapper">
      <div className = "menu__icon"
      onClick= {() => setOpen(!open)}>
        <div className ="menu__strip"></div>
      </div>
      <ul className={`menu__list ${open? 'active' : 'none'}`}>
          <li className ="menu__item">Home</li>
          <li className ="menu__item">Offert</li>
          <li className ="menu__item">Contact</li>
        </ul>
      <div className ="header__slider">
      <img className ="header__img" src = {brush} />
      <img className ="header__img" src = {nails} />
      <img className ="header__img" src = {nails2} />
      <img className ="header__img" src = {oils} />
      <img className ="header__img" src = {brush} />
      </div>
      <div className ="header__text">
      <h1 className = "header__title">Beauty salon</h1>
      <span className ="header__motto">love yourself</span>
      </div>
    </div>
  )
}
