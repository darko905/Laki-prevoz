import React from 'react'
import './service.css'


const Service = () => {
    return (
        <section className='section service' id='services'>
            <h2 className='section__title'>Poverenje je najvažnije</h2>
            <span className='section__subtitle'>Najbolji Kombi-prevoz</span>

            <div className='service__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className="uil uil-archive service__icon"></i>
                        <h3 className='services__title'>Zaštita vaših stvari</h3>
                    </div>
                    <p className='service__description'>Naša vozila su namenska za ovu vrstu posla, sa zaštitom u prostoru za prevoz robe. Vaše stvari će ostati neoštećene bez obzira na dužinu transporta ili neravan teren.</p>

                    
                </div>
                <div className='services__content'>
                    <div>
                        <i className="uil uil-file-check-alt service__icon"></i>
                        <h3 className='services__title'>Dogovor kuću gradi</h3>
                    </div>
                    <p className='service__description'>Moguć je svaki dogovor u okviru dogovorene usluge, po pitanju vrste robe koja se prevozi, konačne destinacije i slično tome.</p>

                    
                </div>
                <div className='services__content'>
                    <div>
                        <i className="uil uil-folder service__icon"></i>
                        <h3 className='services__title'>Čistoća</h3>
                    </div>
                    <p className='service__description'>Vodimo posebno računa o čistoci nažih vozila, čuvajući tako visoki renome koji smo stekli dugogodišjim radom.</p>

                    
                </div>
            
            </div>
        </section>
    )
}

export default Service