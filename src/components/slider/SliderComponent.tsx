import React, { useState } from 'react';
import Slide from './Slide';
import CollapseSlider from '../slider/CollapseSlider';

const SliderComponent: React.FC = () => {
  const [slides, setSlides] = useState([
    { id: 1, name: 'Slide 1', content: <CollapseSlider /> },
    { id: 2, name: 'Slide 2', content: <CollapseSlider /> },
  ]);

  const moveSlide = (fromIndex: number, toIndex: number) => {
    const updatedSlides = [...slides];
    const [movedSlide] = updatedSlides.splice(fromIndex, 1);
    updatedSlides.splice(toIndex, 0, movedSlide);
    setSlides(updatedSlides);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          id={slide.id}
          index={index}
          name={slide.name}
          content={slide.content}
          moveSlide={moveSlide}
        />
      ))}
    </div>
  );
};

export default SliderComponent;
