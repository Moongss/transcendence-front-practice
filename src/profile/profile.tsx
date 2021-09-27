import React, { useState } from 'react';
import AchievementItem from '../components/achievement/achievement';
import EmptyPageInfo from '../components/emptyPage/Info';
import Header from '../components/header/header';
import GameLogItem from '../components/Item/profile/gamelog/item';
import SideBar from '../components/sideBar/sideBar';
import './profile.css';

function Profile() {

  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      <Header isLoggedIn={true}/>
      <div className="page">
        <SideBar/>
        <div className="profile_wrap">
          <div className="profile_header">
            <div className="profile_info">
              {/* show info from server */}
              <img className="user_avater" src="https://cdn.intra.42.fr/users/chlee.png"/>
              <div className="profile_description">
                <div className="profile_nickname">chlee</div>
                <div className="profile_gameInfo">
                  <div className="ladder_rank">Ladder Rank : #1 (0.1% of top)</div>
                  <div className="ladder_point">Ladder Point : 42</div>
                  <div className="win_ratio_title">42G 40W 2L</div>
                  <div className="win_ratio">Win ratio 95.2%</div>
                </div>
              </div>
            </div>

            <div className="profile_side">
              <div className="profile_searchbar">
                {/* keyevent */}
                <img className="search_icon" src="/icons/searchbar/search.svg"/>
                <input className="search_nickname" type="text" placeholder={"search"}/>
              </div>
              <div className="achievement_list">
                {/* achievement icons */}
                <AchievementItem title={"승리 10회"} isAchieve={false}/>
                <AchievementItem title={"패배 10회"} isAchieve={false}/>
                <AchievementItem title={"OTP 등록"} isAchieve={false}/>
                <AchievementItem title={"채팅방 첫 접속"} isAchieve={false}/>
                <AchievementItem title={"친구 100명 달성"} isAchieve={false}/>
              </div>
            </div>
          </div>

          {isEmpty 
            ? <EmptyPageInfo description={`전적이 존재하지 않습니다.\n다른 플레이어와 게임을 진행해보세요!`}/> 
            :  <div className="gameLogList"> {/* margin-top */}
                  <GameLogItem/>
                  <GameLogItem/>
                  <GameLogItem/>
                  <GameLogItem/>
                  <GameLogItem/>
                </div>
          }
        </div>
      </div>

    </>
  );
}

export default Profile;