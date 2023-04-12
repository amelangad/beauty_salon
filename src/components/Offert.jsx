import React from 'react'
import '../styles/offert.css'
import polish from '../assets/polish.jpg'
import nails from '../assets/nails.jpg'
import hair from '../assets/hair.jpg'
import massage from '../assets/massage.jpg'
import {Link} from 'react-router-dom'

export default function Offert() {

   const galleryItems = [
    {
      id: "a",
      src: polish,
    },
    {
      id: "b",
      src: nails,
    },
    {
      id: "c",
      src: massage,
    },
    {
      id: "d",
      src: hair,
    },
  ]

  return (
    <div className="offert__wrapper" name="offert">
      <h1 className="offert__title">Offert</h1>
      <div className="offert__gallery">
        {galleryItems.map(item => <div key={item.id} className="image__wrapper" id={item.id}>
         <Link to ="/treatments"><img className="gallery__image" src={item.src} /></Link>
        </div>)}
      </div>
    </div>
  )
}
