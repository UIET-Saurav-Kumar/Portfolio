

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Instagram1 = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.instagram.com/assassin_saurav/?__a=1&__d=dis');
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Instagram1;
