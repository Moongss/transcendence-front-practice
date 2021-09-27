import React, { useRef, useState } from 'react';
import Button from '../components/button/button';
import EmptyPageInfo from '../components/emptyPage/Info';
import Header from '../components/header/header';
import ChatroomItem from '../components/Item/chatroom/item';
import ChatroomCreateModal from '../components/modal/chatroom/create/chatroomCreateModal';
import SideBar from '../components/sideBar/sideBar';
import './main.css';

enum ChatroomCategory {
  AllChatroomList,
  JoinedChatroomList,
}

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

  const [chatroomCategory, setChatroomCategory] = useState(ChatroomCategory.AllChatroomList);
  const changeChatroomList = (category: ChatroomCategory) => {
    //io.emit : by category
    //io.on   : get Chatrooms object
    return () => {
      setChatroomCategory(category);
    }
  }

  var tempAllChatroomList = [{ roomId: 42, title: "Libft 평가자 모십니다", memberCount: 42, isProtected: true }, 
                            { roomId: 42, title: "gnl에서 메모리 누수 어케 잡으셨나요..?", memberCount: 42, isProtected: true },
                            { roomId: 42, title: "netwhat 공부 어케했어요", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "cub3d sprite 어떻게 그려요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "minishell 같이 하실분들?", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "Webserv 평가자 모십니다", memberCount: 42, isProtected: true },
                            { roomId: 42, title: "Youpi.bla", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "stl 헤더 뜯어봐도 이해가 안됩니다..", memberCount: 42, isProtected: true }, ];

  var tempJoinedChatroomList = [{ roomId: 42, title: "트랜센던스 팀원구함", memberCount: 42, isProtected: false }, 
                            { roomId: 42, title: "피아노 알려주세요 ㅠㅠ", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "테트리스 잘하는 사람들의 모임", memberCount: 42, isProtected: false },
                            { roomId: 42, title: "슈퍼 겁쟁이들의 모임", memberCount: 42, isProtected: false }, ];

  // to test empty info
  // tempAllChatroomList = [];
  // tempJoinedChatroomList = [];

  return (
    <>
      <Header isLoggedIn={true}/>
      <div className="page">
        <SideBar/>
        <div className="content">
          <div className="buttonlist">
            <div className="left_side">
                <Button title="전체 채팅방" onClick={changeChatroomList(ChatroomCategory.AllChatroomList)}></Button>
                <Button title="참여중인 채팅방" onClick={changeChatroomList(ChatroomCategory.JoinedChatroomList)}></Button>
            </div>
            <div className="right_side">
              <Button title="게임 찾기" onClick={()=>{}}></Button>
              <Button title="채팅방 만들기" onClick={() => handleModalOpen('chatroomCreate')}></Button>
            </div>
          </div>

          {(chatroomCategory == ChatroomCategory.AllChatroomList && tempAllChatroomList.length == 0) 
            ? <EmptyPageInfo description={`공개 채팅방이 존재하지 않습니다.\n'채팅방 만들기' 버튼으로 채팅방을 생성해보세요!`}/>
            : (chatroomCategory == ChatroomCategory.JoinedChatroomList && tempJoinedChatroomList.length == 0)
              ? <EmptyPageInfo description={`현재 참여중인 채팅방이 없습니다.\n전체 채팅방 목록에서 참가해보세요!`}/> 
              : <div className="chatroomlist">
                  {chatroomCategory == ChatroomCategory.AllChatroomList 
                    ? tempAllChatroomList.map(item => (
                        <ChatroomItem roomId={item.roomId} title={item.title} memberCount={item.memberCount} isProtected={item.isProtected}/>
                      ))
                    : tempJoinedChatroomList.map(item => (
                        <ChatroomItem roomId={item.roomId} title={item.title} memberCount={item.memberCount} isProtected={item.isProtected}/>
                      ))
                  }
                </div>
          }
        </div>
      </div>
      {isModalOpen.chatroomCreate ? <ChatroomCreateModal open={isModalOpen.chatroomCreate} close={() => handleModalClose('chatroomCreate')}></ChatroomCreateModal> : ""}
    </>
  );
}

export default Main;
