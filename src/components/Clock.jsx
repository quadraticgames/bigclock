import React from 'react';
import { useTime } from '../hooks/useTime';

const Clock = ({ is24Hour, fontSize = 'normal' }) => {
    const { hours, minutes, seconds } = useTime();

    const formatNumber = (num) => num.toString().padStart(2, '0');

    let displayHours = hours;
    let ampm = '';

    if (!is24Hour) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        displayHours = hours % 12 || 12;
    }

    return (
        <div className={`clock-container font-${fontSize}`}>
            <div className="time-display">
                <span className="time-segment">{formatNumber(displayHours)}</span>
                <span className="separator">:</span>
                <span className="time-segment">{formatNumber(minutes)}</span>
                <span className="separator">:</span>
                <span className="time-segment">{formatNumber(seconds)}</span>
                {!is24Hour && <span className="ampm">{ampm}</span>}
            </div>
        </div>
    );
};

export default Clock;
