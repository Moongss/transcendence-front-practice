import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import NotificationOverlay from '../dropdown/notification/dropdown';
import ProfileMenu from '../dropdown/profile/dropdown';
import ChatroomCreateModal from '../modal/chatroom/create/chatroomCreateModal';
import ChatroomInviteModal from '../modal/chatroom/invite/chatroomInviteModal';
import EnterPasswordModal from '../modal/chatroom/join/enterPasswordModal';
import ChatroomSettingModal from '../modal/chatroom/setting/chatroomSettingModal';
import AddFriendModal from '../modal/friend/add/addFriendModal';
import SideBar from '../sideBar/sideBar';
import './header.css';

function Header() {

  const [isNotiOverlayActive, setIsNotiOverlayActive] = useState(false);
  const [isProfileMenuActive, setIsProfileMenuActive] = useState(false);
  const [notifyIconURL, setNotifyIconURL] = useState({
    'on': "/icons/notification/on.svg",
    'off': "/icons/notification/off.svg",
  });

  const [isModalOpen, setIsModalOpen] = useState({
    'addFriend' : false,
    'chatroomInvite': false,
    'chatroomCreate': false,
    'chatroomSetting': false,
    'enterPassword': false,
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
    <div>
      <NotificationOverlay isActive={isNotiOverlayActive}/>
      <ProfileMenu isActive={isProfileMenuActive}/>
      <header>
        <div className="title"> 42 Pong Pong </div>
        <div className="notification_icon">
          <img className="notification_trigger" src={notifyIconURL.on} onClick={handleNotifyDropdown}/>
        </div>
        <div className="profile_icon" onClick={handleProfileDropdown}>
          <div className="user_nickname">chlee</div>
          <img className="user_avater" src="https://cdn.intra.42.fr/users/chlee.png"/>
        </div>
      </header>

      {/* <Button title={"addFriend"} onClick={() => handleModalOpen('addFriend')}></Button>
      <Button title={"chatroomInvite"} onClick={() => handleModalOpen('chatroomInvite')}></Button>
      <Button title={"chatroomCreate"} onClick={() => handleModalOpen('chatroomCreate')}></Button>
      <Button title={"chatroomSetting"} onClick={() => handleModalOpen('chatroomSetting')}></Button>
      <Button title={"enterPassword"} onClick={() => handleModalOpen('enterPassword')}></Button> */}

      {/* <Button title={"addFriend"} onClick={testOnClick('addFriend')}></Button>
      <Button title={"chatroomInvite"} onClick={testOnClick('chatroomInvite')}></Button> */}

      {/* {isModalOpen.addFriend ? <AddFriendModal open={isModalOpen.addFriend} close={() => handleModalClose('addFriend')}></AddFriendModal> : ""}
      {isModalOpen.chatroomInvite ? <ChatroomInviteModal open={isModalOpen.chatroomInvite} close={() => handleModalClose('chatroomInvite')}></ChatroomInviteModal> : ""}
      {isModalOpen.chatroomCreate ? <ChatroomCreateModal open={isModalOpen.chatroomCreate} close={() => handleModalClose('chatroomCreate')}></ChatroomCreateModal> : ""}
      {isModalOpen.chatroomSetting ? <ChatroomSettingModal open={isModalOpen.chatroomSetting} close={() => handleModalClose('chatroomSetting')}></ChatroomSettingModal> : ""}
      {isModalOpen.enterPassword ? <EnterPasswordModal open={isModalOpen.enterPassword} close={() => handleModalClose('enterPassword')}></EnterPasswordModal> : ""} */}
    </div>
  );
}

export default Header;
