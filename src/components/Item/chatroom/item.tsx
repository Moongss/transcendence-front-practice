import React, { useState } from 'react';
import EnterPasswordModal from '../../modal/chatroom/join/enterPasswordModal';
import './item.css';

type chatroomItemProps = {
  roomId: number,
  title: string,
  memberCount: number,
  isProtected: boolean
}
function ChatroomItem(prop: chatroomItemProps) {

  const [modalopen, setModalOpen] = useState(false);

  const handleOnClick = () => {
    if (prop.isProtected)
      setModalOpen(true);
    else
      console.log("io.emit join!!")
      //io.emit(join, prop.roomId);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div className="chatroom_item" onClick={handleOnClick}>
        <div className="chatroom_header">
          <div className="chatroom_title">{prop.title}</div>
          { prop.isProtected ? <img className="chatroom_locked" src="/icons/lock.svg"/> : ""}
        </div>
        <div className="chatroom_member_count">{prop.memberCount}명 참여중</div>
      </div>
      {modalopen ? <EnterPasswordModal open={modalopen} close={handleModalClose}/> : ""}
    </>
  );
}

export default ChatroomItem;