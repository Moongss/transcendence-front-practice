import React from 'react';
import './Item.css';

type profileMenuItemProps = {
  title: string
}

function ProfileMenuItem(prop: profileMenuItemProps) {
  return (
    <div className="menu">
      {prop.title}
    </div>
  );
}

export default ProfileMenuItem;
