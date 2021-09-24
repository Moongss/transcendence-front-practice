import React, { useRef, useState } from 'react';
import RadioButton from '../../../button/radio/radio';
import './chatroomSettingModal.css';

enum Result {
  Default = 0,
  Success,
  NotFoundUser,
  AlreadyFriend,
};

type chatroomSettingModalProps = {
  open: boolean;
  close: any;
}

function ChatroomSettingModal(prop: chatroomSettingModalProps) {

  const Title = "채팅방 생성";
  const Explain = "채팅방을 만들어 다른 유저와 소통해보세요!";

  const roomPlaceholder = "방 제목";
  const buttonTitle = "생성하기";

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
    if (resultCode.current == Result.AlreadyFriend)
      setResultText(input + "님과는 이미 친구입니다.");
    else if (resultCode.current == Result.Success)
      setResultText("친구 신청을 보냈습니다!");
    else if (resultCode.current == Result.NotFoundUser)
      setResultText("존재하지 않는 플레이어입니다. 다시 시도해주세요.");
  }

  const [selectedInput, setSelectedInput] = useState("");

  const handleChange = (inputValue: string) => {
    setSelectedInput(inputValue);
  };

  return (
    <div className={prop.open ? "modal_open modal_background" : "modal_background"}>
      <div className="chatroom_setting_modal_wrap">
        <div className="modal_header">
          <div className="title">{Title}</div>
          <img className="close" src="/icons/modal/close.png" onClick={handleClose}/>
        </div>
        <div className="explain">{Explain}</div>

        <div className="content">
          <div className="subtitle">방 제목</div>
          {/* value={} onChage={}  */}
          <input className="roomTitle" type="text" placeholder={roomPlaceholder}></input>
        </div>

        <div className="content">
          <div className="subtitle">구분</div>
          <div className="select">
            <RadioButton
              name="option"
              value="option-1"
              label="Public"
              isChecked={selectedInput === "option-1"}
              handleChange={handleChange}
            />
            <RadioButton
              name="option"
              value="option-2"
              label="Private"
              isChecked={selectedInput === "option-2"}
              handleChange={handleChange} 
            />
            <RadioButton
              name="option"
              value="option-3"
              label="Protected"
              isChecked={selectedInput === "option-3"}
              handleChange={handleChange}
            />
            <div className="password">
              <img className="password_icon" src="/icons/modal/search.png"/>
              {/* <input className="password_input" type="password" placeholder="password"/> */}
              <input className="password_input" type="password" value={input} onChange={handleUserInputChange} placeholder={"password"}/>
            </div>
          </div>
        </div>

        {/* show or not */}
        <div className="protected_wrap">
          <div className="protected_explain">비밀번호는 숫자 4자리로 구성 가능합니다.</div>
          <div className="protected_error">비밀번호 조건이 잘못됐습니다. 다시 시도해주세요.</div>
        </div>

        {/* <div className="result">
          <div className={resultCode.current == Result.Default ? "" : (resultCode.current == Result.Success ? "success" : "error")}>{resultText}</div>
        </div> */}

        <div className="submit_wrap">
          <div className="submit" onClick={handleSubmitEvent}>
          <div className="submit_title">{buttonTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
    </>
  );
}

export default ChatroomSettingModal;