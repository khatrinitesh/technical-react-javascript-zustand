import React from 'react';
import { useCheckboxStore } from '../store/useCheckboxStore';
import { motion } from 'framer-motion';

const CheckCheckbox:React.FC = () => {

    const {checked,toggleChecked} = useCheckboxStore();

  return (
    <>
       <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Animated Checkbox */}
      <motion.label
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: '18px',
          cursor: 'pointer',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleChecked} // Toggle the checkbox on click
          style={{ marginRight: '10px' }}
        />
        <motion.span
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          animate={{
            color: checked ? '#4CAF50' : '#D32F2F', // Green if checked, red if unchecked
          }}
          transition={{ duration: 0.3 }}
        >
          {checked ? 'Checked' : 'Unchecked'}
        </motion.span>
      </motion.label>
    </div>
    </>
  );
}

export default CheckCheckbox;
