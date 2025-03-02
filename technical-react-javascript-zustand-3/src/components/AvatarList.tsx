import React from 'react';
import { useAvatarStore } from '../store/useAvatarStore';
import { motion } from 'framer-motion';

const AvatarList:React.FC = () => {

    const {avatars,removeAvatar} = useAvatarStore();
  return (
    <>
       <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {avatars.map((avatar, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer',
          }}
          onClick={() => removeAvatar(avatar)} // Remove avatar on click
        >
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </motion.div>
      ))}
    </div>
    </>
  );
}

export default AvatarList;
