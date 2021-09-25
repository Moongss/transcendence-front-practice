import React from 'react';
import { Route } from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register';
import Header from './components/header/header';
import Game from './game/components/game';
import Modal from './game/components/gameSettingModal';
import Main from './main/main';
import './App.css';

function App() {
  return (
	<div className="app">
    <Route path="/" component={Main}/>
		{/* <Route exact path="/" component={Login}/>
		<Route path="/main" component={Main}/>
		<Route path="/register" component={Register}/>
		<Route path="/game" component={Game}/> */}
	</div>
  );
}

export default App;
