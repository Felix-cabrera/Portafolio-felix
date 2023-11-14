import React, { useEffect, useRef, useState } from 'react'
import { data } from '../assets/data'
import './style/portafolio.css'


const Portfolio = ({mode}) => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("ul > li")[currentIndex];
    
        if (imgNode) {
          imgNode.scrollIntoView({
            behavior: "smooth"
          });
        }
    
      }, [currentIndex]);
    
    
      const scrollToImage = (direction) => {
        if (direction === 'prev') {
          setCurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr - 1;
          })
        } else {
          const isLastSlide = currentIndex === data.length - 1;
          if (!isLastSlide) {
            setCurrentIndex(curr => curr + 1);
          }
        }
      }
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        
      }
  return (
    <section id='portftolio' className='portftolio__container container' >
        <article className='portftolio'>
            <h2 className='portftolio__title' >Portafolio</h2>
            <hr className='line__title hr__block'/>
            <ul className='portftolio__div' ref={listRef}>
                <i class="fa-solid fa-angle-left " onClick={() => scrollToImage('prev')}></i>
                <i class="fa-solid fa-angle-right " onClick={() => scrollToImage('next')}></i>
                {
                    data.map((item) => {
                         return <li key={item.id} className='portftolio__header'>
                                    <img className='portftolio__img' src={item.imgUrl} alt="" />
                                <div className='portftolio__descrip'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <h3>Tecnologias usadas</h3>
                                    <ul className='bookstores'>
                                    <i className='fa-brands fa-html5'></i>
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <i className="fa-brands fa-js"></i>
                                    <i className={`fa-brands fa-${item.bookstores[3]} `}></i>
                                    </ul>
                                    <h3>Github</h3>
                                    <a className={`list ${mode ? 'oscuro' :'claro'}`} href={item.github} target="_blank">{item.github}</a>
                                    <h3>Pagina Web</h3>
                                    <a className={`list ${mode ? 'oscuro' :'claro'}`} href={item.Enlace} target='_blank'>{item.Enlace}</a>
                                </div>
                        </li>
                    })
                }
            </ul>
        </article>
        <div className="dots-container">
          {
            data.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
    </section>
  )
}

export default Portfolio