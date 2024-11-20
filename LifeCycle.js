import React, { useState, useEffect } from 'react';

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log('Inside mount'); //No dependency passed. runs on every render

    return () => {
      console.log('Inside unmount'); //Empty Array. Runs only on the first render
    };
  },[]);
  useEffect(() => {
            fetch('https://random-data-api.com/api/users/random_user')
                .then(response => response.json())
                .then(data => setUserData(data));
        },[]);

  useEffect(() => {
    if (count>=0){
      console.log('Inside update'); //with dependency(prop or state). runs on first render
    }                               // and any time any dependency value changes
  },[count]);

  return (
    <div>
        {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>
                        Name:
                        {userData.first_name}&nbsp;
                        {userData.last_name}
                    </p>
                    <p>
                        Email: {userData.email}
                    </p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifeCycle;

