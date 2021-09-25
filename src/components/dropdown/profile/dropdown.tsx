import React from 'react';
import ProfileMenuItem from '../../Item/profile/Item';
import './dropdown.css';

type DropdownProps = {
  isActive: boolean;
};

function ProfileMenu(prop: DropdownProps) {

  return (

    <div className="profile_menu_wrap">
      {console.log(prop.isActive)}

      <div className={`dropdown ${prop.isActive ? 'active' : 'inactive'}`}>
        <ProfileMenuItem title="프로필 보기"/>
        <ProfileMenuItem title="환경 설정"/>
      </div>
    </div>
  );
}

export default ProfileMenu;
