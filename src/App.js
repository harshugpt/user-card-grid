import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import UserCardGrid from './UserCardGrid';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handleGetUsers = async () => {
    setIsLoading(true);
    
    setCurrentPage((currentPage % totalPages) + 1);
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const data = await response.json();
      setUsers(data.data);
      setCurrentPage((currentPage % totalPages) + 1); // increment page and loop back to 1 if needed
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="app">
      <Navbar brandName="User-Card Grid" handleGetUsers={handleGetUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserCardGrid users={users} />
      )}
    </div>
  );
};

export default App;