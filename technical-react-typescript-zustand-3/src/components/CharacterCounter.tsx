import React from 'react';
import { useTextStore } from '../store/useTextStore';
import { motion } from 'framer-motion';

const CharacterCounter:React.FC = () => {

    const {text,setText} = useTextStore();
  return (
    <>
      <div style={{ width: '300px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      {/* Input Field */}
      <motion.input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '20px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Character Count */}
      <motion.div
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
        }}
        key={text.length} // Trigger animation on text length change
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {text.length} / 100 characters
      </motion.div>
    </div>
    </>
  );
}

export default CharacterCounter;
