// import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
// import Home from './pages/home';
// import Project from './pages/project';
// import Experiences from './pages/experiences';
// import Navbar from './components/navbar';
// import Footer from './components/Footer';
// import InstagramPage from './pages/instagram';
// import ProjectDisplay from './pages/ProjectDisplay';
import './App.css';

import { useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';

function App() {

  const clientId = '279332924797649';
  const redirectUri = 'https://celebrated-pika-4a9fd9.netlify.app/';
  const authEndpoint = 'https://api.instagram.com/oauth/authorize/';
  // const scope = 'user_profile,user_media';
  const scope= "user_profile,user_media"
  const handleAuthorization = () => {
    const queryParams = querystring.stringify({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: scope,
    });

    const authorizationUrl = `${authEndpoint}?${queryParams}`;
    console.log("authorizationCode" , authorizationCode);
    window.location.href = authorizationUrl;
  };

  useEffect(() => {
    // Check if the page was redirected with the authorization code
    
    const authorizationCode = new URLSearchParams(window.location.search).get('code');

    if (authorizationCode) {
      // Use the authorization code to get an access token
      const tokenEndpoint = 'https://api.instagram.com/oauth/access_token';

      const tokenParams = {
        client_id: clientId,
        client_secret: '8a3a475b865e9661da708abaf1c147af',
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code: authorizationCode,
      };

      axios.post(tokenEndpoint, querystring.stringify(tokenParams))
        .then(response => {
          const accessToken = response.data.access_token;
          // Now you can use the accessToken to make API calls to Instagram
          console.log('Access Token:', accessToken);
        })
        .catch(error => {
          console.error('Error fetching access token:', error);
          console.log("authorizationCode" , authorizationCode);
        });
    }
  }, []);


  return (
    <div>
      <h1>Instagram AUthorization</h1>
      <button onClick={handleAuthorization}>Authorize with Instagram</button>
    </div>
  );
}

export default App;
