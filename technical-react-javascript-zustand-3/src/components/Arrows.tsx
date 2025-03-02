import React from 'react';
import { useArrowStore } from '../store/useArrowState';
import { motion } from 'framer-motion';

const Arrows:React.FC = () => {

    const {isToggled,toggleArrow} = useArrowStore();
  return (
    <>
        <motion.div
      onClick={toggleArrow}  // Toggle the arrow on click
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        padding: '10px',
        fontSize: '30px',
        transition: 'transform 0.3s ease',
      }}
      animate={{
        rotate: isToggled ? 180 : 0,  // Rotate the arrow 180 degrees when toggled
        scale: isToggled ? 1.5 : 1,    // Scale the arrow up when toggled
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
    >
      &#8595;  {/* This is a downward arrow, you can use any symbol or icon */}
    </motion.div>
    </>
  );
}

export default Arrows;
