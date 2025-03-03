import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import SliderComponent from "../../components/slider/SliderComponent";

interface Home {
  name: string;
  components: JSX.Element;
}

const HomeSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Items: Home[] = [
    {
      name: "Slideshow",
      components: <SliderComponent />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border border-black rounded-4xl"
    >
      <div className="">
       
          <div>
            {Items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className=""
              >
                <div
                  className="flex justify-between items-center p-4 px-10 border border-black rounded-4xl cursor-pointer mb-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {faq.name}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-600" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-100 rounded-4xl">
                        {faq.components}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
