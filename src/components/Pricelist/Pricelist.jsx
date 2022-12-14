import React from 'react'
import './pricelist.css'

const Pricelist = () => {
    return (
        <section className='section pricelist' id='price'>
            <h2 className='section__title'>Cenovnik</h2>
            <span className='section__subtitle'>Najbolji odnos cene i kvaliteta usluge</span>

            <div className='pricelist__container container grid'>
                <div className='pricelist__info'>
                    <div className='pricelist__card'>

                        <h3 className='pricelist__card-title'>Gradska vožnja</h3>
                        <span className='pricelist__card-data'>Širi reon grada Beograda</span>

                    </div>

                    <div className='pricelist__card'>
                        <h3 className='pricelist__card-title'>35 <i className="uil uil-euro"></i></h3>
                    </div>

                    <div className='pricelist__card'>
                        <span className='pricelist__card-data'><i className="uil uil-check"></i>Prevoz kombijem</span>
                        <span className='pricelist__card-data'><i className="uil uil-check"></i>Putarine</span>
                        <span className='pricelist__card-data'><i className="uil uil-check"></i>Ostali troškovi</span>

                    </div>

                    
                </div>
                <div className='pricelist__info'>
                    <div className='pricelist__card'>

                        <h3 className='pricelist__card-title'>Međugradska vožnja</h3>
                        <span className='pricelist__card-data'>Vožnja do bilo kog grada u Srbiji</span>
                    </div>

                    <div className='pricelist__card'>

                        <h3 className='pricelist__card-title'>1.2/km<i className="uil uil-euro"></i></h3>

                    </div>

                    <div className='pricelist__card'>

                        <span className='pricelist__card-data'><i className="uil uil-check"></i>Prevoz kombijem</span>
                        <span className='pricelist__card-data'><i className="uil uil-multiply"></i>Putarine</span>
                        <span className='pricelist__card-data'><i className="uil uil-multiply"></i>Ostali troškovi</span>

                    </div>
                    
                </div>
                <div className='pricelist__info'>
                    <div className='pricelist__card'>
                        <h3 className='pricelist__card-title'>Međunardni prevoz</h3>
                        <span className='pricelist__card-data'>The standard version</span>
                        

                    </div>

                    <div className='pricelist__card'>

                        <h3 className='pricelist__card-title'>1.0/km<i className="uil uil-euro"></i></h3>

                    </div>

                    <div className='pricelist__card'>

                        <span className='pricelist__card-data'><i className="uil uil-check"></i>Prevoz kombijem</span>
                        <span className='pricelist__card-data'><i className="uil uil-multiply"></i>Putarine</span>
                        <span className='pricelist__card-data'><i className="uil uil-multiply"></i>Ostali troškovi</span>

                    </div>

                    
                </div>
            
            </div>
        </section>
    )
}

export default Pricelist
