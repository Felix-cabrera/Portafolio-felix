import React from 'react'
import './style/skills.css'

const Skills = () => {
  return (
    <section id='skill' className='skill__container container'>
      <article className='skill'>
        <div className='skill__div'>
          <h2 className='skill__title'>Mis Habilidades</h2>
          <hr className='line__title'/>
        </div>
          <ul className='skill__ul'>
              <li className='skill__li'><i className="fa-brands fa-html5 "></i> Html</li>
              <li className='skill__li'><i className="fa-brands fa-css3-alt"></i> Css</li>
              <li className='skill__li'><i className="fa-brands fa-js"></i> Javascript</li>
              <li className='skill__li'><i className="fa-brands fa-react"></i> React</li>
              <li className='skill__li'><i className="fa-brands fa-node"></i> Node </li>
              <li className='skill__li'><i className="fa-brands fa-github"></i> Github </li>
          </ul>
        </article>
    </section>
  )
}

export default Skills