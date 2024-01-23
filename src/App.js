// App.js

import React, { useState } from 'react';
import Home from './component/Home';
import About from './component/About';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          Home
        </div>
        <div
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          About
        </div>
      </div>
      <div className="content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
      </div>
    </div>
  );
};

export default App;
