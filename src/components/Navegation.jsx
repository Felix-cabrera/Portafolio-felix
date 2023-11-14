import { useState } from 'react'
import './style/navegation.css'

const Navegation = ({mode, handleToggle}) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='nav__container'>
        <p className='toggle' >
          <i className={`fa-solid ${mode ?'fa-toggle-on':'fa-toggle-off'} `}onClick={handleToggle}>
          </i>{mode ?<i className="fa-regular fa-sun"></i>:<i className="fa-solid fa-moon"></i>}</p>
        <header className='nav__header'>
            <img className='header__img' src="./images/foto-name.png" alt="" />
        </header>
        <i className={`fa-solid ${isOpen ?'fa-circle-xmark':'fa-bars'} `} onClick={handleNav}></i>
        <h2 className='nav__name'>Felix Cabrera Bernaola</h2>
        <ul className={`nav__list ${isOpen && 'nav_bar'} `} >
          <a href="Inicio"></a>
            <li className='list'><a className="list" href="#home">Home</a></li>
            <li className='list'><a className="list" href="#aboutme">Acerca de mi</a></li>
            <li className='list'><a className="list" href="#skill">Mis Habilidades </a></li>
            <li className='list'><a className="list" href="#portftolio">Portafolio</a></li>
            <li className='list'><a className="list" href="#contact">Contacto</a></li>
        </ul>
        <div className='nav__items'>
        <a href="https://github.com/Felix-cabrera" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github item claro"></i></a>
        <a href="https://www.linkedin.com/in/felix-guillermo-cabrera-bernaola-a42120273/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin item claro"></i></a>
        <a href="mailto: cabrera.bernaola.felixg@gmail.com"><i className="fa-solid fa-envelope item claro"></i></a>
        </div>
    </nav>
  )
}

export default Navegation