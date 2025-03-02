import React from 'react';
import { useAlertStore } from '../store/useAlertStore';
import { motion } from 'framer-motion';

const Alert:React.FC = () => {

    const {isVisible,message,hideAlert}= useAlertStore();
  return (
    <>
       <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '20px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <div>{message}</div>
      <button
        onClick={hideAlert}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'red',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Close
      </button>
    </motion.div> 
    </>
  );
}

export default Alert;
