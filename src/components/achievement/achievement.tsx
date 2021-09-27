import React from 'react';
import './achievement.css';
import Tooltip from '@mui/material/Tooltip';

type achievementItemProps = {
  title: string,
  isAchieve: boolean,
}

//db achievementId -> achievementTitle X
//isfront?
function AchievementItem(prop: achievementItemProps) {
  return (
    <Tooltip title={prop.title} placement="top">
      <img className="achievement_item" src={"/icons/achievement/" + (prop.isAchieve ? "true.svg" : "false.svg")}/>
    </Tooltip>
  );
}

export default AchievementItem;