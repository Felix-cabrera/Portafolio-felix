import './style/contact.css'

const Contact = () => {

  const submit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <section id='contact' className='contact__container container'>
      <h2 className='contact__title'>Contactame</h2>
      <article className='contact'>
        <hr className='line__title' />
        <h3 className='contact__subtitle'>Dejame un mensaje</h3>
        <form className='contact__input' onSubmit={submit}>
          <input className='input' type="text" placeholder="Nombre" required />
          <input className='input' type="email" placeholder="Email" required />
          <textarea className='input-a' name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
          <button className='contact__button' >Enviar mensaje</button>
        </form>
      </article>
      <div className='contact__link'>
        <a href="https://github.com/Felix-cabrera" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github item claro"></i></a>
        <a href="https://www.linkedin.com/in/felix-guillermo-cabrera-bernaola-a42120273/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin item claro"></i></a>
        <a href="mailto: cabrera.bernaola.felixg@gmail.com"><i className="fa-solid fa-envelope item claro"></i></a>
      </div>
      <div className='contact__info'>
        <div className='info1'>
          <h2>Felix Guillermo Cabrera Bernaola</h2>
          <p>Desarrollador Web full stack, joven apasionado por la tecnología</p>
        </div>
        <div className='info2'>
          <i className="fa-solid fa-location-dot"></i>
          <p>Ica , Perú</p>
        </div>
      </div>

    </section>
  )
}

export default Contact