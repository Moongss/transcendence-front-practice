import React from 'react';
import './dropdown.css';

type DropdownProps = {
  isActive: boolean;
};

function ProfileMenu(prop: DropdownProps) {

  return (

    <div className="profile_menu_wrap">
      {console.log(prop.isActive)}

      <div className={`dropdown ${prop.isActive ? 'active' : 'inactive'}`}>
        <div className="menu">
          프로필 보기
        </div>
        <div className="menu">
          환경 설정
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;