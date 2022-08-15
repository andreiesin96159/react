import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './State/State'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';



const RenderPage = (state) =>{
  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
      <React.StrictMode>
        <App  state={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
      </BrowserRouter>
    );
  }


reportWebVitals();


RenderPage(store.getState())


store.subscraib(RenderPage);