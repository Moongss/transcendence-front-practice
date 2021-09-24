import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import NotificationOverlay from '../dropdown/notification/dropdown';
import ProfileMenu from '../dropdown/profile/dropdown';
import ChatroomInviteModal from '../modal/chatroom/invite/chatroomInviteModal';
import ChatroomSettingModal from '../modal/chatroom/setting/chatroomSettingModal';
import chatroomSettingModal from '../modal/chatroom/setting/chatroomSettingModal';
import AddFriendModal from '../modal/friend/add/addFriendModal';
import './header.css';

function Header() {

  const [isNotiOverlayActive, setIsNotiOverlayActive] = useState(false);
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
  const [notifyIconURL, setNotifyIconURL] = useState("/icons/notification/false.png");

  const [isModalOpen, setIsModalOpen] = useState({
    'addFriend' : false,
    'chatroomInvite': false,
    'chatroomCreate': false,
    'chatroomSetting': false,
  });

  const handleModalOpen = (key: string) => {
    setIsModalOpen({
      ...isModalOpen,
      [key]: true,
    });
  }

  const handleModalClose = (key: string) => {
    setIsModalOpen({
      ...isModalOpen,
      [key]: false,
    });
  }

  const testOnClick = (key: string) => {
    console.log(`modal button click! : `, key);
    handleModalOpen(key);
  }

  const handleNotifyDropdown = () => {
    console.log(`click!!`)
    setIsNotiOverlayActive(!isNotiOverlayActive);
  }

  const handleProfileDropdown = () => {
    console.log(`test click!!`)
    setIsProfileMenuActive(!isProfileMenuActive);
  }

  useEffect(() => {
    //list check and url setting
    //if (~) setNotifyIconURL('/icons/notification/true.png');
  }, []);

  return (
    <>
      <NotificationOverlay isActive={isNotiOverlayActive}/> 
      <ProfileMenu isActive={isProfileMenuActive}/>
      <header>
        <div className="title"> 42 Pong Pong </div>
        <div className="notification_icon">
          <img className="notification_trigger" src={notifyIconURL} onClick={handleNotifyDropdown}/>
        </div>
        <div className="profile_icon" onClick={handleProfileDropdown}>
          <div className="user_nickname">chlee</div>
          <img className="user_avater" src="https://cdn.intra.42.fr/users/chlee.png"/>
        </div>
      </header>

      <Button title={"addFriend"} onClick={() => handleModalOpen('addFriend')}></Button>
      <Button title={"chatroomInvite"} onClick={() => handleModalOpen('chatroomInvite')}></Button>
      <Button title={"chatroomSetting"} onClick={() => handleModalOpen('chatroomSetting')}></Button>
      {/* <Button title={"addFriend"} onClick={testOnClick('addFriend')}></Button>
      <Button title={"chatroomInvite"} onClick={testOnClick('chatroomInvite')}></Button> */}

      <AddFriendModal open={isModalOpen.addFriend} close={() => handleModalClose('addFriend')}></AddFriendModal>
      <ChatroomInviteModal open={isModalOpen.chatroomInvite} close={() => handleModalClose('chatroomInvite')}></ChatroomInviteModal>
      <ChatroomSettingModal open={isModalOpen.chatroomSetting} close={() => handleModalClose('chatroomSetting')}></ChatroomSettingModal>
    </>
  );
}

export default Header;