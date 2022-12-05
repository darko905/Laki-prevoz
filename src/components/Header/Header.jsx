import React, { useState } from 'react'
import './header.css'

const Header = () => {

    const [Toogle, showMenu] = useState(false);
    // const [activeNav, setActiveNav] = useState('#home');
    
    return (
        <header className='header'>
            <nav className='nav container'>
                <a className='nav__logo'>Laki prevoz</a>

                <div className={Toogle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a className='nav__link active-link'>
                                Naslovna
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link'>
                                O Nama
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link'>
                                Tim
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link'>
                                Cenovnik
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link'>
                                Kontakt
                            </a>
                        </li>
                    </ul>
                    
                    <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toogle)}></i>
                    
                    
                </div>

                <div className='nav__toggle' onClick={()=> showMenu(!Toogle)}>
                    <i className="uil uil-bars"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header