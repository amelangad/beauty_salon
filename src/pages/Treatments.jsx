import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/treatments.css'
import face from '../assets/face.jpg'
import nails from '../assets/nails.jpg'
import hair from '../assets/hair.jpg'
import massage from '../assets/massage.jpg'

export default function Treatments() {

  const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

const Treatments = [
    {
      id: "1",
      src: face,
      title: "Face treatment",
      text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker",
    },
    {
      id: "2",
      src: nails,
      title: "Nails",
      text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker",
    },
    {
      id: "3",
      src: massage,
      title: "Massage",
      text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker",
    },
    {
      id: "4",
      src: hair,
      title: "Hairstyles",
      text: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker",
    },
  ]


  return (
    <div className ="treatments" name ="treatments"
    onLoad = {scrollUp}>
    <Nav/>
    <h1 className ="treatments__header">Offerts</h1>
    <div className="treatment__wrapper">
      {Treatments.map(item => 
    <div className ="treatments__box">
      <div className ="treatments__image--wrapper">
        <h1 className ="treatments__title">{item.title}</h1>
      <img className ="treatments__image" src={item.src}/>
      </div>
      <p className ="treatments__text">{item.text}
        </p></div>)}
    </div>
    <Footer/>
    </div>
  )
}
