import React from 'react'
import './about.css'
import Image from '../../Assets/Kombi.png'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section__title'>O nama</h2>
            <span className='section__subtitle'>Nekoliko informacija o nama</span>
            <div className='about__container container grid'>
                <img src={Image} className="about__img"/>
                <div className='about__data'>
                    <h3 className='about__title'>Prevoz Robe i Stvari</h3>
                    <p className='about__descritpion'>
                        Više od deset godina iskustva u kombi-prevozu,
                        hiljade zadovoljnih klijenata su naša preporuka. 
                        Profesionalni pristup svakom klijentu je ono 
                        što nas izdvaja od drugih. U svakom poslu najvažnije
                        je steći poverenje u onoga kome tražite uslugu. 
                        Dugogodišnje iskustvo u bavljenju ovim poslom 
                        nas postavlja na vrh liste prevoznika kojima možete verovati.
                    </p>
                    <a>
                        <button className='button button--flex'>
                            Cenovnik
                        </button>
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default About