import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface SlideProps {
  id: number;
  index: number;
  name: string;
  content: React.ReactNode;
  moveSlide: (fromIndex: number, toIndex: number) => void;
}

const ItemType = 'SLIDE';

const Slide: React.FC<SlideProps> = ({ id, index, name, content, moveSlide }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveSlide(item.index, index);
        item.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3>{name}</h3>
      {content}
    </div>
  );
};

export default Slide;
