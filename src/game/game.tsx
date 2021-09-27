import React from 'react';
import Header from '../components/header/header';
import Pong from '../components/pong/pong';
import SideBar from '../components/sideBar/sideBar';
import './game.css';

function Game() {
  return (
    <>
      <Header isLoggedIn={true}/>
      <div className="page">
        <SideBar/>
        <div className="game_wrap">
          <div className="game_scoreboard">
            <div className="userinfo">
              <img className="user_avater" src="https://cdn.intra.42.fr/users/chlee.png"/>
              <div className="user_nickname">chlee</div>
            </div>
            <div className="score">2 : 3</div>
            <div className="userinfo">
              <img className="user_avater" src="https://cdn.intra.42.fr/users/yhan.jpg"/>
              <div className="user_nickname">chlee</div>
            </div>
          </div>
          <div className="game_window">
            <Pong/>
          </div>
        </div>
        {/* <Game/> */}
      </div>
    </>
  );
}

export default Game;