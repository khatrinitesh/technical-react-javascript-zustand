import React from 'react';
import { useSearchStore } from '../store/useSearchStore';
import { motion } from 'framer-motion';

const AnimatedSearch:React.FC = () => {
    const {isSearchOpen,query,toggleSearch,setQuery} = useSearchStore();
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Search Icon */}
      <motion.div
        onClick={toggleSearch}
        style={{
          fontSize: '30px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        animate={{
          rotate: isSearchOpen ? 45 : 0,
        }}
      >
        🔍
      </motion.div>

      {/* Animated Search Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isSearchOpen ? 300 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          overflow: 'hidden',
          marginLeft: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
          }}
        />
      </motion.div>
    </div>
    </>
  );
}

export default AnimatedSearch;
