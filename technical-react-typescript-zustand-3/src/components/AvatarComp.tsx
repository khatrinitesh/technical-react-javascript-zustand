import React, { useState } from 'react';
import { useAvatarStore } from '../store/useAvatarStore';
import AvatarList from './AvatarList';

const AvatarComp:React.FC = () => {
    const [newAvatar, setNewAvatar] = useState('');
    const { addAvatar } = useAvatarStore((state) => state);

    const handleAddAvatar = () => {
        if (newAvatar) {
          addAvatar(newAvatar);
          setNewAvatar('');
        }
      };
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Avatar List</h1>

      <input
        type="text"
        value={newAvatar}
        onChange={(e) => setNewAvatar(e.target.value)}
        placeholder="Enter image URL"
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleAddAvatar}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Avatar
      </button>

      <AvatarList />
    </div>
    </>
  );
}

export default AvatarComp;
