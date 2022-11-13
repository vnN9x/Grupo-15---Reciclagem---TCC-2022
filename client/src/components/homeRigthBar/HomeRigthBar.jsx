import React, { useState } from 'react';
import { rigthData } from './rigthData';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './homeRigthBar.css'

const HomeRigthBar = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowRight className='right-arrow' onClick={nextSlide} />
      {rigthData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <a href={slide.link} target='_blank' rel="noopener noreferrer"><img src={ slide.image } title={slide.title} alt={slide.title} className='image' /></a>
            )}
            <div className='imageTitleRigth'><p>{slide.title}</p></div>
          </div>
        );
        
      })}

    </section>
  );
};

export default HomeRigthBar;