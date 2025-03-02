import React from 'react';
import { useColorStore } from '../store/useColorStore';
import { motion } from 'framer-motion';

const ColorChanger:React.FC = () => {

    const {backgroundColor,setBackgroundColor} = useColorStore();

    const colorOptions = ['#ffffff', '#f0f0f0', '#ff5733', '#33ff57', '#3357ff']
  return (
    <>
      <div style={{ padding: '20px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Change Background Color</h2>
        <select
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >
          {colorOptions.map((color) => (
            <option key={color} value={color} style={{ backgroundColor: color }}>
              {color}
            </option>
          ))}
        </select>
      </motion.div>
    </div>
    </>
  );
}

export default ColorChanger;
