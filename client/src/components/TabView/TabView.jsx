import React, { useState } from 'react';
import './TabView.Module.css'

const TabView = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = React.Children.toArray(children);

    return (
        <div className="tab-view">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`btn-tab-button ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.props.icon} {tab.props.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].props.children}
            </div>
        </div>
    );
};

export default TabView
