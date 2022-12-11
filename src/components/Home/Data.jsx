import React from 'react'
import Social from './Social'

const Data = () => {
    return (
        <div className='home__data'>
            <h1 className='home__title'>Vaš Kombi prevoz</h1>
            <h3 className='home__subtitle'>Sa nama prevoz postaje putovanje</h3>
            <Social/>
            <button className='button button-flex'>Kontakt <i className="uil uil-phone-pause"></i></button>
        </div>
    )
}

export default Data