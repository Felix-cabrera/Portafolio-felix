import React from 'react'
import './style/home.css'


const Home = () => {
  return (
    <section id='home' className='home__container container'>
      <div className='home'>
        <p>Bienvenido</p>
        <h1 className='home__title'>Desarrollador Web Full Stack... </h1>
        <button className='home__button'>	
        <a className='home__link' download href="./images/Curriculum Vitae Felix .pdf">Descargar CV</a></button>
      </div>
    </section>
  )
}

export default Home