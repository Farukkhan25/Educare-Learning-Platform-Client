// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { useEffect, useState } from 'react';
import { themeContext } from './contexts/Context';
import { useContext } from 'react';

function App() {
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode
          ? "#050122"
          : "linear-gradient(to right, white, #0099FF)",
        color: darkMode ? "#ffffff" : "",
      }}
    >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
