
// useApi.js
import { useState } from 'react';

const useApi = () => {
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, method, data = null) => {
    // setLoading(true);
    setError(null);
       let url = 'https://www.truehomes24.com/api/'+ endpoint;
    try {
      var myHeaders = new Headers();
      const response = await fetch(url, {
        method: method,
        // headers: {
        //     'Content-Type': 'application/json',
        //     // Add any additional headers if needed
        //   },
        headers: myHeaders,
        body: data ? JSON.stringify(data) : null,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      // setLoading(false);
      return responseData;
    } catch (error) {

      console.log('err apiconfig.....',error);
      setError(error.message);
      // setLoading(false);
    }
  };

  return { fetchData, error };
};

export default useApi;

export const UseApi = () => {
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchData = async (endpoint, method, data = null) => {
    setError(null);
       let url = 'http://api.truehomes24.com/api/'+ endpoint;
    try {
      var myHeaders = new Headers();
      // myHeaders.append("Authorization", "Bearer ");
      const response = await fetch(url,{
        method: method,
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     // "Authorization": "Bearer "
        //     // Add any additional headers if needed
        //   },
        headers: myHeaders,
        // mode: "no-cors",
        // redirect: "follow",
        // body: data ? JSON.stringify(data) : null,
      });

      if (!response.ok) {
         console.log('response...',response);
        throw new Error('Network response was  ok');
      }

      const responseData = await response.json();
      // setLoading(false);
      return responseData;
    } catch (error) {

      console.log('err apiconfig.....',error);
      setError(error.message);
      // setLoading(false);
    }
  };

  return { FetchData};
};

