import React, {  useState } from 'react';
import './css/ContextMenu.css';

const ContextMenu = ({ isOpen, position,children, left,rigth,top,bottom}) => {
  if (!isOpen) return null;

  return (
<div  style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        padding: '10px',
        zIndex: 1000,
      }}>
        {children}
      </div>
  );
}; 

export default ContextMenu;