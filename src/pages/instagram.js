// pages/instagram.js

import { useEffect } from 'react';
import axios from 'axios';
import querystring from 'querystring';

const InstagramPage = () => {
  const clientId = '279332924797649';
  const redirectUri = 'https://www.buylowcal.com/home';
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
        client_secret: '26cc09dd26eaab3787f9e46d28b993a4',
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
        });
    }
  }, []);

  return (
    <div>
      <h1>Instagram Authorization</h1>
      <button onClick={handleAuthorization}>Authorize with Instagram</button>
    </div>
  );
};

export default InstagramPage;
