import React from 'react';
import { IconState } from '../interface';
import { useIconStore } from '../store/useIconStore';
import { motion } from 'framer-motion';

const AnimateIcon:React.FC = () => {
    const {isActive,toggleIcon}= useIconStore();
  return (
    <>
        <div onClick={toggleIcon} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
      <motion.div
        animate={{
          scale: isActive ? 1.5 : 1,
          rotate: isActive ? 360 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          fontSize: '50px',
          color: isActive ? 'tomato' : 'black',
          display: 'inline-block',
        }}
      >
        🔥
      </motion.div>
    </div>
    </>
  );
}

export default AnimateIcon;
