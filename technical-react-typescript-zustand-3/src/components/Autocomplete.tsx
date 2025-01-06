import React, { useEffect } from 'react';
import { useAutocompleteStore } from '../store/useAutocompleteStore';
import { motion } from 'framer-motion';
import { allSuggestions } from '../constants/autocompleteData';

const Autocomplete:React.FC = () => {

    const {query,setQuery,suggestions,setSuggestions} = useAutocompleteStore((state) => state);

  useEffect(() => {
    if (query.length === 0) {
        setSuggestions([]);
      } else {
        const filteredSuggestions = allSuggestions.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      }
  },[query, setSuggestions])
  return (
    <>
      <div style={{ width: '300px', margin: '0 auto', padding: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state
        placeholder="Search for fruits..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      {suggestions && suggestions.length > 0 && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            padding: '10px 0',
            marginTop: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            listStyleType: 'none',
            background: 'white',
          }}
        >
          {suggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
              onClick={() => setQuery(suggestion)} // Set query to selected suggestion
            >
              {suggestion}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
    </>
  );
}

export default Autocomplete;
