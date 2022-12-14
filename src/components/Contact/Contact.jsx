import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className='section contact' id='contact'>
            <h2 className='section__title'>Kontakt</h2>
            <span className='section__subtitle'>Vaša pitanja, utiske o saradnji ili nešto drugo možete poslati ovde</span>
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Ostanimo u kontaktu!</h3>

                    <form className='contact__form'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Ime</label>
                            <input 
                            type="text" 
                            name='name' 
                            className='contact__form-input' 
                            placeholder='Unesite vase ime'/>
                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Mail</label>
                            <input 
                            type="email" 
                            name='email' 
                            className='contact__form-input' 
                            placeholder='Unesite vas email'/>
                        </div>
                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Poruka</label>
                            <textarea 
                            name='message' 
                            cols="30" 
                            rows="10"
                            className='contact__form-input' 
                            placeholder='Ostavite vasu poruku'
                            ></textarea>
                        </div>
                        <button className='button button-flex'>Posalji</button>

                    </form>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'>Nasi podatci</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <h3 className='contact__card-title'>E-mail address:</h3>
                            <span className='contact__card-data'>lakiprevoz@gmiail.com</span>

                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-phone contact__card-icon'></i>

                            <h3 className='contact__card-title'>Broj telefona:</h3>
                            <span className='contact__card-data'>+38160444555</span>

                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-street-view contact__card-icon'></i>

                            <h3 className='contact__card-title'>Adresa:</h3>
                            <span className='contact__card-data'>Beograd, Serbia</span>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact