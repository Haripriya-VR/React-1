import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count + 1}`);
        setUser(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count]); 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  let userContent;
  if (loading) {
    userContent = <p>Loading user information...</p>;
  } else if (error) {
    userContent = <p>Error: {error.message}</p>;
  } else if (user) {
    userContent = (
      <div>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  } else {
    userContent = <p>No user data available.</p>;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      {userContent}
    </div>
  );
}

export default Counter;

