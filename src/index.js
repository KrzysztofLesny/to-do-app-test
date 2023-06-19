import React from 'react';
import { createRoot} from 'react-dom/client';
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
      --gradientColor1: rgb(255,111,97,1);
      --gradientColor2: rgb(241,91,124,1);
      --gradientColor3: rgb(214,83,148,1);
      --gradientColor4: rgb(175,85,166,1);
      --gradientColor5: rgb(124,89,175,1);
      --gradientColor6: rgb(58,91,172,1);
      --backupBackgroundColor: var(--gradientColor1);
      --gradient: linear-gradient(90deg, rgb(255,111,97,1) 0%, rgb(241,91,124,1) 20%, rgb(214,83,148,1) 40%, rgb(175,85,166,1) 60%, rgb(124,89,175,1) 80%, rgb(58,91,172,1) 100%);
      --boxShadow: 2px 2px 4px 0px rgb(18, 18, 18, 0.5);
      --fontColorPrimary: rgb(17, 17, 17);
      --fontColorGray: rgb(102, 102, 102);
      --baseLightness: 50%;
      --lightLightness: 98%;
      --darkLightness: 30%;
      --blueBerry: hsl(271, 76%, var(--baseLightness));
      --lightBlueBerry: hsl(271, 76%, var(--lightLightness));
      --darkBlueBerry: hsl(271, 76%, var(--darkLightness));
      --white: rgb(255, 255, 255);
  }
  body {
    background-color: var(--lightBlueBerry);
  }
`

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={toDoStore}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

