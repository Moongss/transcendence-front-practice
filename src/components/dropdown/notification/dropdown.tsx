import React, { useEffect, useState } from 'react';
import './dropdown.css';
import NotificationItem from './Item';
//List를 Main에서 불러오면, 리스트 유무에 따른 icon img 변경
//Button을 누르면 Dropdown open.

type DropdownProps = {
  isActive: boolean;
};

function NotificationOverlay(prop: DropdownProps) {

  return (
    <div className="notification_wrap">
      <div className={`dropdown ${prop.isActive ? 'active' : 'inactive'}`}>
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
          <NotificationItem/>
      </div>
    </div>
  )
}
export default NotificationOverlay;