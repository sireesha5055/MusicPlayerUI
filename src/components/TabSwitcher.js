import React from 'react';
import './TabSwitcher.css';

function TabSwitcher({ currentTab, onTabSwitch }) {
  const tabs = ['For You', 'Top Hits']; 

  const handleTabClick = (tab) => {
    if (typeof onTabSwitch === 'function') {
      onTabSwitch(tab);
      console.log('onTabSwitch:', onTabSwitch);

    } else {
      console.error('onTabSwitch is not a function');
    }
  };

  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <div
          key={tab}
          className={`tab ${currentTab === tab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default TabSwitcher;
