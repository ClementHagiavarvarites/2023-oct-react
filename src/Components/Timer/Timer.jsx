import React, { useState, useEffect } from 'react';

function getTime() {
    return new Date().toLocaleTimeString();
}

export default function Timer() {
    // constructor state setting
    const [time, setTime] = useState(getTime());
    const [intervalId, setIntervalId] = useState(null);

    function didMount() {
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 100);
        setIntervalId(intervalId);
    }

    function willUnmount() {
        clearInterval(intervalId);
    }

    function administrateTimer() {
        didMount();
        return willUnmount;
    }

    useEffect(administrateTimer, []);

    // render
    return (
        <p>{ time }</p>
    );
}