import React, { useEffect } from 'react';
import { useColorStore } from '../store/useColorStore';
import { motion } from 'framer-motion';

const ChangeBgScroll:React.FC = () => {
    const { backgroundColor, setBackgroundColor } = useColorStore((state) => state);

     // Function to handle scroll event and change background color
  const handleScroll = () => {
    // Get scroll position and calculate a new background color
    const scrollY = window.scrollY; // Get current scroll position
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Maximum scrollable height

    // Calculate the color based on the scroll position
    const scrollPercentage = scrollY / maxScroll;
    const red = Math.min(255, scrollPercentage * 255); // Red increases with scroll
    const green = Math.min(255, (1 - scrollPercentage) * 255); // Green decreases with scroll
    const blue = 150; // Keep blue constant for simplicity

    // Set the background color dynamically
    setBackgroundColor(`rgb(${Math.floor(red)}, ${Math.floor(green)}, ${blue})`);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
       <motion.div
      style={{
        minHeight: '100vh', // Full viewport height
        backgroundColor, // Dynamically change background color
        transition: 'background-color 0.5s ease', // Smooth transition when color changes
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content of the page */}
      <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>Scroll to Change Background Color</h1>
      <p style={{ textAlign: 'center' }}>
        Scroll down to see the background color change dynamically.
      </p>
    </motion.div>
    </>
  );
}

export default ChangeBgScroll;
