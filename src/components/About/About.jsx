import React from 'react'
import './about.css'
import Image from '../../Assets/Kombi.png'

const About = () => {
    return (
        <section className='section about'>
            <h2 className='section__title'>O nama</h2>
            <span className='section__subtitle'>Nekoliko informacija o nama</span>
            <div className='about__container container grid'>
                <div className='about__data'>
                    <h3 className='about__title'>Prevoz Robe i Stvari</h3>
                    <p className='about__descritpion'>
                        Više od deset godina iskustva u kombi-prevozu,
                        hiljade zadovoljnih klijenata su naša preporuka. 
                        Profesionalni pristup svakom klijentu je ono 
                        što nas izdvaja od drugih.
                    </p>
                    <a>
                        <button className='button button--flex'>
                            Cenovnik
                        </button>
                    </a>
                </div>
                <img src={Image} className="about__img"/>
            </div>
        </section>
    )
}

export default About