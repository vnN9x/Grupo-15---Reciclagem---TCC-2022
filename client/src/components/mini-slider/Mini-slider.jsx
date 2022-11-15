import React, { useState } from 'react';
import { miniSliderData } from './mini-slider-data';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './mini-slider.css'

const MiniSlider = ({ slides }) => {
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
    <div className='mini-container'>
      <section className='mini-slider'>
        <FaArrowLeft className='left-arrow-slider' onClick={prevSlide} />
        <FaArrowRight className='right-arrow-slider' onClick={nextSlide} />
        {miniSliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={ slide.image } title={slide.title} alt={slide.title} className='image-slider' />
              )}
            </div>
          );
        })}
      </section>
      {miniSliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div className='texto'><span>{slide.text}</span></div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default MiniSlider;