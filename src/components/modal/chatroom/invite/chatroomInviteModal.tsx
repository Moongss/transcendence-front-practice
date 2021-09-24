import React, { useEffect, useRef, useState } from 'react';
import './chatroomInviteModal.css';

enum Result {
  Default = 0,
  Success,
  NotFoundUser,
  AlreadyJoined,
};

type chatroomInviteModalProps = {
  open: boolean;
  close: any;
}

function ChatroomInviteModal(prop: chatroomInviteModalProps) {

  const Title = "채팅방 초대";
  const Explain = "친구의 닉네임을 알고 있다면 채팅방에 초대해보세요!";

  const nickPlaceholder = "플레이어 닉네임";
  const buttonTitle = "친구 초대";

  const [input, setInput] = useState("");
  const [resultText, setResultText] = useState("");
  const resultCode = useRef(Result.Default);

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "")
    {
      setResultText("");
      resultCode.current = 0;
    }
    setInput(e.target.value);
  }

  const handleClose = () => {
    setInput("");
    setResultText("");
    prop.close();
  }

  const handleSubmitEvent = () => {
    console.log(`userInput : `, input);

    //io.emit -> nickname send
    //io.on -> get result code
    if (input == "ina")
      resultCode.current = 3;
    else if (input == "yhan")
      resultCode.current = 1;
    else
      resultCode.current = 2;

    //set Result Text
    if (resultCode.current == Result.AlreadyJoined)
      setResultText(input + " 님은 이미 채팅방에 참여중입니다.");
    else if (resultCode.current == Result.Success)
      setResultText("초대 메시지를 보냈습니다!");
    else if (resultCode.current == Result.NotFoundUser)
      setResultText("존재하지 않는 플레이어입니다. 다시 시도해주세요.");
  }

  return (
    <div className={prop.open ? "modal_open modal_background" : "modal_background"}>
      <div className="modal_wrap">
        <div className="modal_header">
          <div className="title">{Title}</div>
          <img className="close" src="/icons/modal/close.png" onClick={handleClose}/>
        </div>
        <div className="explain">{Explain}</div>
        <div className="search">
          <div className="search_bar">
            <img className="search_icon" src="/icons/modal/search.png"/>
            <input className="search_nickname" type="text" value={input} onChange={handleUserInputChange} placeholder={nickPlaceholder}/>
          </div>
          <div className="submit" onClick={handleSubmitEvent}>
            <div className="submit_title">{buttonTitle}</div>
          </div>
        </div>
        <div className="result">
          <div className={resultCode.current == Result.Default ? "" : (resultCode.current == Result.Success ? "success" : "error")}>{resultText}</div>
        </div>
      </div>
    </div>
  );
}

export default ChatroomInviteModal;