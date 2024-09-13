import React, { useEffect } from 'react';
import useStoreTwo from './store/store2';

const Users2 = () => {
  const { users, loading, error, fetchUsers } = useStoreTwo();

  // Fetch users when the component mounts
  useEffect(() => {
      fetchUsers();
  }, [fetchUsers]);

  return (
    <>
        <h1>Users List</h1>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} |{user.email}</li>
                ))}
            </ul>
    </>
  );
}

export default Users2;
