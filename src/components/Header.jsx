import React from 'react'
import Nav from './Nav'
import '../styles/header.css'
import brush from '../assets/brush.jpg'
import nails from '../assets/nails.jpg'
import nails2 from '../assets/nails2.jpg'
import oils from '../assets/oils.jpg'


export default function Header() {


  const sliderPhotos = [
    {
      id: 1,
      title: brush,
    },
    {
      id: 2,
      title: nails,
    },
    {
      id: 3,
      title: nails2,
    },
    {
      id: 4,
      title: oils,
    },
    {
      id: 5,
      title: brush,
    },
  ]
  

  return (
    <div className="header__wrapper" name ="header">
     <Nav/>
      <div className="header__slider">
        {sliderPhotos.map(photo => <img key={photo.id} className="header__img" src={photo.title} />)}
      </div>
      <div className="header__text">
        <h1 className="header__title">Beauty salon</h1>
        <span className="header__motto">love yourself</span>
      </div>
    </div>
  )
}
