import React, { useState } from 'react'
import '../styles/nav.css'
import { Link } from 'react-scroll';
import { Link as Links } from 'react-router-dom';

export default function Nav() {
    const [open, setOpen] = useState(false);

    function closeMenu() {
        setOpen(false);
    }
    return (
        <>
            <div className="menu__icon"
                onClick={() => setOpen(!open)}>
                <div className={`menu__strip ${open ? 'active' : 'none'}`}></div>
            </div>
            <ul className={`menu__list ${open ? 'active' : 'none'}`}>
                <li className="menu__item" onClick={closeMenu}><Links className="menu__item" to="/">Home</Links></li>
                <li className="menu__item"><Link className="menu__item" to="offert" smooth={true} offset={50} onClick={closeMenu}>Offert</Link></li>
                <li className="menu__item"><Link className="menu__item" to="contact" smooth={true} offset={50} onClick={closeMenu}>Contact</Link></li>
            </ul>
        </>
    )
}
