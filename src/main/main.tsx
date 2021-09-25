import React, { useState } from 'react';
import Button from '../components/button/button';
import Header from '../components/header/header';
import ChatroomCreateModal from '../components/modal/chatroom/create/chatroomCreateModal';
import SideBar from '../components/sideBar/sideBar';
import './main.css';

function Main() {

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

  return (
    <>
      <Header/>
      <div className="page">
        <SideBar/>
        <div className="content">
          <div className="buttonlist">
            <div className="left_side">
              <Button title="전체 채팅방" onClick={()=>{}}></Button>
              <Button title="참여중인 채팅방" onClick={()=>{}}></Button>
            </div>
            <div className="right_side">
              <Button title="게임 찾기" onClick={()=>{}}></Button>
              <Button title="채팅방 만들기" onClick={() => handleModalOpen('chatroomCreate')}></Button>
            </div>
          </div>
          <div className="chatroomlist">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      {isModalOpen.chatroomCreate ? <ChatroomCreateModal open={isModalOpen.chatroomCreate} close={() => handleModalClose('chatroomCreate')}></ChatroomCreateModal> : ""}
    </>
  );
}

export default Main;
