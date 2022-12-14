import React, { useState } from 'react'
import './header.css'

const Header = () => {
    window.addEventListener('scroll', function(){
    const header = this.document.querySelector('.header');

    if(this.scrollY >= 80) {
        header.classList.add('scroll-header')
        }
        else{
        header.classList.remove('scroll-header');
        }
    })

    const [Toogle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
    
    return (
        <header className='header'>
            <nav className='nav container'>
                <a className='nav__logo'>Laki prevoz</a>

                <div className={Toogle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                Naslovna
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                O Nama
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#plan' onClick={() => setActiveNav('#plan')} className={activeNav === "#plan" ? "nav__link active-link" : "nav__link"}>
                                Plan
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#price' onClick={() => setActiveNav('#price')} className={activeNav === "#price" ? "nav__link active-link" : "nav__link"}>
                                Cenovnik
                            </a>
                        </li>
                        <li className='nav__item' onClick={()=> showMenu(!Toogle)}>
                            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
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