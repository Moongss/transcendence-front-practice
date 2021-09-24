import React from 'react';
import { Route } from 'react-router-dom';
import Login from './auth/login';
import Main from './auth/main';
import Register from './auth/register';
import Header from './components/header/header';
import Game from './game/components/game';
import Modal from './game/components/gameSettingModal';

function App() {
  return (
	<div>
    <Route path="/" component={Header}/>
		{/* <Route exact path="/" component={Login}/>
		<Route path="/main" component={Main}/>
		<Route path="/register" component={Register}/>
		<Route path="/game" component={Game}/> */}
	</div>
  );
}

export default App;
