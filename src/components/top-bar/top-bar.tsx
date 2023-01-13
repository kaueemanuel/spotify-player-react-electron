import React from 'react';

// import { Container } from './styles';
import './top-bar.styles.css';

const TopBar: React.FC = () => {
  const closeWindow = () => {
    window.electron.ipcRenderer.sendMessage('close');
  };
  const minimizeWindow = () => {
    window.electron.ipcRenderer.sendMessage('minimize');
  };
  return (
    <div className="container">
      <div>
        <button type="button" onClick={minimizeWindow}>
          -
        </button>
        <button type="button" onClick={closeWindow}>
          X
        </button>
      </div>
    </div>
  );
};

export default TopBar;
