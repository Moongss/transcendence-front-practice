import React from 'react';
import "./Info.css";

type emptyPageInfoProps = {
  description: string,
}

function EmptyPageInfo(prop: emptyPageInfoProps) {
  return (
    <div className="empty_info">
      <img className="empty_warning" src="/icons/emptyPage/warning.svg"/>
      <pre className="empty_description">{prop.description}</pre>
    </div>
  );
}

export default EmptyPageInfo;