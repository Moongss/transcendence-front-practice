import React from 'react';
import { Route } from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register/register';
import Header from './components/header/header';
import Main from './main/main';
import './App.css';
import Profile from './profile/profile';
import Game from './game/game';
import Setting from './setting/setting';
import OTP from './auth/otp/otp';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Main}/>
      <Route path="/main" component={Main}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/game" component={Game}/>
      <Route path="/setting" component={Setting}/>
      <Route path="/otp" component={OTP}/>
      <Route path="/register" component={Register}/>
      {/* <Route exact path="/" component={Login}/>
      <Route path="/main" component={Main}/>
      <Route path="/register" component={Register}/>
      <Route path="/game" component={Game}/> */}
    </div>
  );
}

export default App;
