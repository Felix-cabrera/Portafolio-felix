import React from 'react'
import './style/aboutme.css'

const AboutMe = () => {
  return (
    <section id='aboutme' className='aboutme__container container'>
          <div className='aboutme__div'>
            <h2 className='aboutme__title'>Sobre Mi </h2>
            <hr className='line__title' />
         </div>
         <article className='aboutme'>
            <div className='aboutme__descrip'>
                <h3>Desarrollador Web Full Stack</h3>
                <p className='aboutme__p'>Hola, mi nombre es Felix Guillermo Cabrera Bernaola
                soy desarrollador web full stack. Me considero una
                persona proactiva y apasionada por la tecnología,
                siempre buscando mantenerme al día con las últimas
                tendencias y herramientas en el campo de la programación.
                </p>
                <p className='aboutme__p'>Estoy seguro de que puedo aportar mi conocimiento y habilidades
                en su empresa, y contribuir al éxito de sus proyectos.</p>
            </div>
            <ul className='aboutme__ul'>
                <li className='aboutme__item' ><span className='aboutme__value'>Nombre : </span><span> Felix Cabrera Bernaola</span></li>
                <hr className='line' />
                <li className='aboutme__item' ><span className='aboutme__value'>Email :</span><span className='email'>cabrera.bernaola.felixg@gmail.com</span></li>
                <hr className='line' />
                <li className='aboutme__item' ><span className='aboutme__value'>Edad :</span><span>24 años</span></li>
                <hr className='line' />
                <li className='aboutme__item' ><span className='aboutme__value'>Soy de :</span><span>Ica - Peru</span></li>
                <button className='aboutme__button'>Descargar CV</button>
            </ul>
        </article>
    </section>
  )
}

export default AboutMe