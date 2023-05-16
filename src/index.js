import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { toDoStore } from './redux/toDoStore';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      --backupBackgroundColor: rgb(255,111,97);
      --gradient: linear-gradient(90deg, rgba(255,111,97,1) 0%, rgba(241,91,124,1) 20%, rgba(214,83,148,1) 40%, rgba(175,85,166,1) 60%, rgba(124,89,175,1) 80%, rgba(58,91,172,1) 100%);
      --boxShadow: 2px 2px 4px 0px rgba(18, 18, 18, 0.5);
      --fontColorPrimary: #111;
      --fontColorGray: #666;
      --baseLightness: 50%;
      --lightLightness: 98%;
      --darkLightness: 30%;
      --blueBerry: hsl(271, 76%, var(--baseLightness));
      --lightBlueBerry: hsl(271, 76%, var(--lightLightness));
      --darkBlueBerry: hsl(271, 76%, var(--darkLightness));
      --white: #fff;
  }
  body {
    background-color: var(--lightBlueBerry);
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={toDoStore}>
        <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

