import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h2 className='footer__title'>Laki</h2>

                <ul className='footer__list'>
                    <li>
                        <a href='#home' className='footer__link'>Naslovna</a>
                    </li>
                    <li>
                        <a href='#about' className='footer__link'>O nama</a>
                    </li>
                    <li>
                        <a href='#plan' className='footer__link'>Plan</a>
                    </li>
                    <li>
                        <a href='#price' className='footer__link'>Cenovnik</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href='' aria-label='instagram' className='footer__social-link' target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href='' aria-label='Linkedin' className='footer__social-link' target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href='' aria-label='Github' className='footer__social-link' target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>                    
                </div>
                <span className='footer__copy'>
                    &#169; 2022 Copyrights All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer