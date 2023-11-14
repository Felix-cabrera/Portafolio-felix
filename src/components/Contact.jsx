import React from 'react'
import './style/contact.css'

const Contact = () => {
  return (
    <section id='contact' className='contact__container container'>
        <h2 className='contact__title'>Contactame</h2>
        <article className='contact'>
            <hr className='line__title'/>
            <h3 className='contact__subtitle'>Dejame un mensaje</h3>
            <div className='contact__input'>
                <input className='input' type="text" placeholder="Nombre" required />
                <input className='input' type="email" placeholder="Email" required />
                <textarea className='input-a' name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
            </div>
            <button className='contact__button' >Enviar mensaje</button>
            <hr className='line__title'/>
        </article>
    </section>
  )
}

export default Contact