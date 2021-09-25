import React, { useEffect, useRef, useState } from 'react';
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

  const Title = "채팅방 설정";
  const Explain = "채팅방 설정을 변경해보세요.";

  const roomPlaceholder = "방 제목";
  const buttonTitle = "생성하기";


  const [explainText, setExplainText] = useState("비밀번호는 숫자 4자리로 구성 가능합니다.");
  const [errorText, setErrorText] = useState("");

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setExplainText("비밀번호는 숫자 4자리로 구성 가능합니다.");
    console.log(Number(e.target.value), e.target.value.length);
    if (e.target.value.length != 4)
      setErrorText("비밀번호를 숫자 4자리로 구성해주세요.");
    else if(isNaN(Number(e.target.value)) || (Number(e.target.value) < 0 || Number(e.target.value) > 9999))
      setErrorText("비밀번호에는 숫자만 입력 가능합니다.");
    else
    {
      setErrorText("");
      setExplainText("");
    }
    console.log(`[DEBUG] user password : `, password);
  }

  const handleClose = () => {
    setPassword("");
    prop.close();
  }

  const handleSubmitEvent = () => {

    if (errorText == "") {
      console.log(`emit password : `, password);
      //io.emit(password) to create gameroom

    }
  }

  const [selectedInput, setSelectedInput] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    //io.on(getChatroomSettings)
    // 1. public
    // 2. private
    // 3. protected, password

    setSelectedInput("option-3");
    setPassword("1243");
  }, []);

  const handleChange = (inputValue: string) => {
    console.log(inputValue);
    setSelectedInput(inputValue);
  };

  return (
    <div className={prop.open ? "modal_open modal_background" : "modal_background"}>
      <div className="chatroom_setting_modal_wrap">
        <div className="modal_header">
          <div className="title">{Title}</div>
          <img className="close" src="/icons/modal/close.svg" onClick={handleClose}/>
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
            <div className={selectedInput === "option-3" ? "password_open" : "password_close"}>
              <img className="password_icon" src="/icons/modal/password.svg"/>
              {/* <input className="password_input" type="password" placeholder="password"/> */}
              <input className="password_input" type="password" maxLength={4} value={password} onChange={handleUserInputChange} placeholder={"password"}/>
            </div>
          </div>
        </div>

        {/* show or not */}
        <div className={selectedInput === "option-3" ? "protected_open" : "protected_close"}>
          <div className="protected_explain">{explainText}</div>
          <div className="protected_error">{errorText}</div>
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
