import React from 'react';
import { motion } from 'framer-motion';
import Accordion from './Accordion';
import { AccordionItemProps } from '../interface';
import { useAccordionStore } from '../store/useAccordionStore';

const AccordionComp:React.FC<AccordionItemProps> = ({index,title,children}) => {

    const {openItem,toggleItem} = useAccordionStore();

    const isOpen = openItem === index;
  return (
    <div>
      <div
        onClick={() => toggleItem(index)}
        style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f1f1f1' }}
      >
        {title}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden', padding: isOpen ? '10px' : '0 10px', backgroundColor: '#eaeaea' }}
      >
        {isOpen && children}
      </motion.div>
    </div>
  );
}

export default AccordionComp;
