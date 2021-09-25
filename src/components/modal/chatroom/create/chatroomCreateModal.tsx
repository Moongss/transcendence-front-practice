import React, { useRef, useState } from 'react';
import RadioButton from '../../../button/radio/radio';
import './chatroomCreateModal.css';

enum Result {
  Default = 0,
  Success,
  NotFoundUser,
  AlreadyFriend,
};

type chatroomCreateModalProps = {
  open: boolean;
  close: any;
}

function ChatroomCreateModal(prop: chatroomCreateModalProps) {

  const Title = "채팅방 생성";
  const Explain = "채팅방을 만들어 다른 유저와 소통해보세요!";

  const roomPlaceholder = "방 제목";
  const buttonTitle = "생성하기";

  const [password, setPassword] = useState("");
  const [resultText, setResultText] = useState("");

  const [explainText, setExplainText] = useState("비밀번호는 숫자 4자리로 구성 가능합니다.");
  const [errorText, setErrorText] = useState("");
  const resultCode = useRef(Result.Default);

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
    setResultText("");
    prop.close();
  }

  const handleSubmitEvent = () => {

    if (errorText == "") {
      console.log(`emit password : `, password);
      //io.emit(password) to create gameroom

    }
  }

  const [selectedInput, setSelectedInput] = useState("");

  const handleChange = (inputValue: string) => {
    setSelectedInput(inputValue);
  };

  return (
    <div className={prop.open ? "modal_open modal_background" : "modal_background"}>
      <div className="chatroom_create_modal_wrap">
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
}

export default ChatroomCreateModal;
