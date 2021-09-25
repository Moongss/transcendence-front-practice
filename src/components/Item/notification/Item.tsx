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
    <div className="notification_item">
      <div className="notification_item_box">
        <div className="title">{Title}</div>
        <div className="explain">{Explain}<br/>수락하시겠습니까?</div>
      </div>
      <div className="notification_item_button accept">
        <img className="checkbutton" src="/icons/dropdown/checkbutton/accept.svg" onClick={handleAcceptEvent}/>
      </div>
      <div className="notification_item_button reject">
        <img className="checkbutton" src="/icons/dropdown/checkbutton/reject.svg" onClick={handleRejectEvent}/>
      </div>
    </div>
  );
}

export default NotificationItem;
