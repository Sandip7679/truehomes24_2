// export default ApiConf = (endpoint) => {
//     var myHeaders = new Headers();
//     // myHeaders.append("Cookie", "ci_session=cb1dce190550c2482533364aa204816f54f34ce3");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };
//     let url = 'https://www.truehomes24.com/api/' + endpoint;
//     return fetch(url, requestOptions)
//         .then(response => response.text())
//         .then(result => {
//             console.log('result.....', result);
//             return result;
//         })
//         .catch(error => {
//             console.log('error', error);
//             return error
//         });
// }

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
