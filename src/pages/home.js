import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import './home.css'; // import CSS styling
import './App.css'; // import whole app styling
// import { BrowserRouter as useNavigate} from "react-router-dom";

function Home() {


  // step 1) state variable for login / reg link, set false first
  const [goToLogin, setGoToLogin] = React.useState(false)
  const [goToRegister, setGoToRegister] = React.useState(false)


  // step 3) if state var = true, nav to login / reg
  if (goToLogin) {
    return <Navigate to = "/login"/>;
  }
  if (goToRegister) {
    return <Navigate to = "/register"/>;
  }


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

















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './home.css';

// function Home() {
//   const [user, setUser] = React.useState("");
//   const navigate = useNavigate();
//   const [playlists, setPlaylists] = useState([]);


//   // use Effect for /@me session verification / extracting info from that route
//   useEffect (() => {
//     const fetchPlaylists = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5003/playlists',
//           {
//             withCredentials: true,
//         });
//         console.log(response.data.playlists); // *** test for response ***
//         if (response.status === 200) {
//           setPlaylists(response.data.playlists); // call setPlaylists function and give state var the playlist data
//         }
//       } catch (error) {
//         console.error("Error fetching playlists:", error);
//       }
//     };

//     fetchPlaylists()

//   }, []);



//   // state variable for spotify login
//   const [goToUserAuth, setGoToUserAuth] = React.useState(false)

//   // redirect for spotify login
//   if (goToUserAuth === true) {
//     navigate("/spotauth");
//     // window.location.href = "http://127.0.0.1:5003/spotify-login";
//   }


//   // Conditionally render content based on `user`
//   return (
//     <div>
//       <h1 className="hello">Hello, {user}!</h1>
//       <h2 className="welcome">Welcome to your Dashboard!</h2>
//       <h3 className="your-playlists">Your Playlists</h3>
//       <div className="playlists-container">
//         {Array.isArray(playlists) && playlists.length > 0 ? (
//           playlists.map(playlist => (
//             <div key={playlist.id} className="playlist-card">
//               {playlist.image && <img src={playlist.image} alt={playlist.name} className="playlist-image" />}
//               <h4 className="playlist-title">{playlist.name}</h4>
//               <a href={playlist.url} target="_blank" rel="noopener noreferrer" className="open-spotify">Open in Spotify</a>
//             </div>
//           ))
//         ) : (
//           <p className="no-playlists">No playlists found.</p>
//         )}
//       </div>
//       <button onClick= {() => setGoToUserAuth(true)} className ="spotify-connect-button">
//           Connect Spotify Playlists
//           </button>
//     </div>
//   );
// }

// export default Home;





















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './home.css';

// const Home = () => {
//   const location = useLocation();
//   const [playlists, setPlaylists] = useState([]); // State to hold playlists
//   const [error, setError] = useState(null); // State to hold any error messages
//     const navigate = useNavigate();




//   useEffect(() => {
//       const queryParams = new URLSearchParams(location.search);
//       const code = queryParams.get('code');

//       if (code) {
//           // You can optionally send the code to your backend to handle the token exchange
//           axios.get(`http://localhost:5003/callback?code=${code}`,
//             {
//               withCredentials: true,
//             }
//           )
//               .then(response => {
//                   console.log('Callback response:', response.data);
//                   // Now fetch playlists
//                   fetchPlaylists();
//               })
//               .catch(error => {
//                   console.error('Error during callback:', error);
//               });
//       }
//   }, [location]);

//   const fetchPlaylists = async () => {
//       try {
//           const response = await axios.get('http://localhost:5003/playlists', {
//               withCredentials: true, // Include credentials if needed
//           });
//           console.log('Fetched Playlists:', response.data);
//           // Handle the playlists data (e.g., set it in state)
//           setPlaylists(response.data.items); // Set the fetched playlists in state

//       } catch (error) {
//           console.error('Error fetching playlists:', error);
//           setError('Error fetching playlists.'); // Set error message

//       }
//   };




//   // state variable for spotify login
//   const [goToUserAuth, setGoToUserAuth] = React.useState(false)

//   // redirect for spotify login
//   if (goToUserAuth === true) {
//     navigate("/spotauth");
//     // window.location.href = "http://127.0.0.1:5003/spotify-login";
//   }


//   // Conditionally render content based on `user`
//   return (
//     <div>
//         <h1 className="hello">Hello!</h1>
//         <h2 className="welcome">Welcome to your Dashboard!</h2>
//         <h3 className="your-playlists">Your Playlists</h3>
//         <div className="playlists-container">
//             {error && <p className="error">{error}</p>} {/* Display error message if any */}
//             {Array.isArray(playlists) && playlists.length > 0 ? (
//                 playlists.map(playlist => (
//                     <div key={playlist.id} className="playlist-card">
//                         {playlist.images && playlist.images.length > 0 && (
//                             <img src={playlist.images[0].url} alt={playlist.name} className="playlist-image" />
//                         )}
//                         <h4 className="playlist-title">{playlist.name}</h4>
//                         <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="open-spotify">Open in Spotify</a>
//                     </div>
//                 ))
//             ) : (
//                 <p className="no-playlists">No playlists found.</p>
//             )}
//         </div>
//         <button onClick={() => setGoToUserAuth(true)} className="spotify-connect-button">
//             Connect Spotify Playlists
//         </button>
//     </div>
// );
// }

// export default Home;