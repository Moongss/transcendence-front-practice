import React from 'react';
import './Item.css';

function NotificationItem() {

  const Title = "친구 신청"
  const Explain = "polarbear 님의 친구 신청입니다."
  const handleAcceptEvent = () => {
    console.log(`accept click!!`)
  }

  const handleRejectEvent = () => {
    console.log(`reject click!!`)
  }

  return (
    <div className="listItem">
      <div className="listItem-box">
        <div className="title">{Title}</div>
        <div className="explain">{Explain}<br/>수락하시겠습니까?</div>
      </div>
      <div className="listItem-button accept">
        <img src="/icons/select/accept.png" onClick={handleAcceptEvent}/>
      </div>
      <div className="listItem-button reject">
        <img src="/icons/select/reject.png" onClick={handleRejectEvent}/>
      </div>
    </div>
  );
}

export default NotificationItem;