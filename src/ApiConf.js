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