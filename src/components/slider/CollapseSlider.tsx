import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaTrash } from 'react-icons/fa';
import SliderForm from './SliderForm';

interface Slide {
  components: JSX.Element;
}

const CollapseSlider: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [items, setItems] = useState<Slide[]>([
    {
    
      components: <SliderForm />
    },
   
  ]);

  const toggleSlide = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    // Close the slide if it's open
    if (openIndex === index) {
      setOpenIndex(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" rounded-4xl  "
    >
      <div className="space-y-5">
        {items.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="border border-black rounded-4xl "
          >
            <div
              className="flex justify-between items-center p-4 border border-black rounded-4xl  shadow-md cursor-pointer"
              onClick={() => toggleSlide(index)}
            >
              <h3 className="text-xl  font-bold text-gray-800">{slide.name}</h3>
              <div className="flex items-center space-x-4">
                <FaTrash
                  className="text-gray-600 hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                />
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-600" />
                </motion.div>
              </div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden  "
                >
                  <div className="pt-4">
                    {slide.components}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CollapseSlider;
