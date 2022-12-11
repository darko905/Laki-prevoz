import React from 'react'
import './plan.css'

const Qualification = () => {
    return (
        <section className='section plan' id='plan'>
            <h2 className='section__title'>Plan prevoza</h2>
            <span className='section__subtitle'>Dobra organizacija je pola posla</span>
            <div className="container__timeline container">
                <div className="container__plan left">
                    <div className="date">01</div>
                    <i className="icon uil uil-truck"></i>
                    <div className="content">
                    <h2>Dolazak</h2>
                    <p>
                        Dolazak na dogovorenu lokaciju za utovar stvari.
                    </p>
                    </div>
                </div>
                <div className="container__plan right">
                    <div className="date">02</div>
                    <i className="icon uil uil-user-nurse"></i>
                    <div className="content">
                    <h2>Utovar</h2>
                    <p>
                        Utovar stvari, sa našim ili vašim radnicima.
                    </p>
                    </div>
                </div>
                <div className="container__plan left">
                    <div className="date">03</div>
                    <i className="icon uil-location-arrow"></i>
                    <div className="content">
                    <h2>Prevoz</h2>
                    <p>
                        Prevoz robe na dogovorenu adresu, uz kontakt sa vlasnikom.
                    </p>
                    </div>
                </div>
                <div className="container__plan right">
                    <div className="date">04</div>
                    <i className="icon uil-map-marker-alt"></i>
                    <div className="content">
                    <h2>Destinacija</h2>
                    <p>
                        Dolazak na dogovorenu lokaciju.
                    </p>
                    </div>
                </div>
                <div className="container__plan left">
                    <div className="date">05</div>
                    <i className="icon uil uil-file-check-alt"></i>
                    <div className="content">
                    <h2>Kontrola</h2>
                    <p>
                        Kontrola prevezene robe i potvrda da nema oštećenja.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification