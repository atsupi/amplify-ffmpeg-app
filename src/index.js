import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const amplifyConfig = {
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_DcNqRhu8k',
    userPoolWebClientId: '1ppaqhvip1k0eaavn9om4sbmor', 
    identityPoolId: 'ap-northeast-1:37ac0cf2-13c7-41a0-97f5-4002bbb787c9'
  }
} 
Amplify.configure(amplifyConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
