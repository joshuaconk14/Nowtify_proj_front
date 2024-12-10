import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css'; // import CSS styling
import './App.css'; // import whole app styling

// const App = () => {
//     const [message, setMessage] = useState("");

//     // Set the base URL for the API
//     const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5008';

//     useEffect(() => {
//         axios.get(`${API_BASE_URL}/api`)
//             .then((response) => {
//                 if (response.status === 200) {
//                     // setMessage(response.data.message);
//                     setMessage("data successfully fetchedddd");
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setMessage("Failed to fetch data from backend");
//             });
//     }, []);


//     return (
//         <div>
//             <h1>{message}</h1>
//         </div>
//     );
// };

// export default App;






function Home() {


    // // step 1) state variable for login / reg link, set false first
    // const [goToLogin, setGoToLogin] = React.useState(false)
    // const [goToRegister, setGoToRegister] = React.useState(false)
  
  
    // // step 3) if state var = true, nav to login / reg
    // if (goToLogin) {
    //   return <Navigate to = "/login"/>;
    // }
    // if (goToRegister) {
    //   return <Navigate to = "/register"/>;
    // }
  
  
    //  step 2) buttons have function call state variable to make it true
    return (
      
      <div>
        <h1 className="nowtify-header">Nowtify</h1>
        <p className="slogan" >Find the perfect playlist for your now.</p>
        <p className="fade">No Spotify account? Create a general account here</p>
        <button onClick = { () => setGoToRegister(true)} className="fade">Register</button>
        <button onClick = { () => setGoToLogin(true)} className="login-button" >Login</button>
      </div>
    );
  }
  
  export default Home