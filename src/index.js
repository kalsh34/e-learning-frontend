import React from 'react';
import ReactDOM from 'react-dom/client';
import User_nav from './user/user_nav';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from'react-router-dom';
import User_page from './user/user_page';
import Appo from './Home2/appo';
import{WorkoutcontextProvider}from'./context/workoutcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutcontextProvider>
    <BrowserRouter>
<App/>
    </BrowserRouter>
    </WorkoutcontextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
