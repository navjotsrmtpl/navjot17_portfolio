import React from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
    isOn: boolean;
    handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
    return (
        <button
            className={`toggle-switch${isOn ? ' toggle-on' : ''}`}
            onClick={handleToggle}
            aria-label={isOn ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isOn ? 'Light mode' : 'Dark mode'}
        >
            <span className="toggle-icon">{isOn ? '🌙' : '☀️'}</span>
            <span className="toggle-track">
                <span className="toggle-thumb" />
            </span>
        </button>
    );
};

export default ToggleSwitch;