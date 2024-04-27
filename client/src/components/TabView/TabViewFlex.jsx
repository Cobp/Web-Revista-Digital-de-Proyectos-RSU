import React, { useState } from 'react';
import './TabViewFlex.Module.css'

const TabViewFlex = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = React.Children.toArray(children);

    return (
        <div className="tab-view-flex">
            <div className="tab-container">
                <label>
                    <p className='Name'>Nombre Admin</p>
                    <p className='Register'>ØØØØØØØØØ - Registro</p>
                </label>
                <hr/>
                <div className='tab-buttons-container'>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button-flex ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.props.icon} {tab.props.label}
                    </button>
                ))}
                </div>
            </div>
            <div className="tab-content-flex">
                {tabs[activeTab].props.children}
            </div>
        </div>
    );
}

export default TabViewFlex
