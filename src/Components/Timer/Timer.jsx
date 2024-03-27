import React, { useState, useEffect } from 'react'

function getTime() {
    return new Date().toLocaleTimeString();
}

export default function Timer() {
    // constructor state setting
    const [time, setTime] = useState(getTime());
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // componentDidMount (vaguely)
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 100);
        setIntervalId(intervalId);

        // componentWillUnmount (vaguely)
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    // render
    return (
        <div>{ time }</div>
    );
}

class Timer2 extends React.Component {
    constructor(props) {
        super(props);
        // constructor state setting
        this.state = {
            time: getTime(),
            intervalId: null,
        }
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState({ time: getTime() });
        }, 100);
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <div>{ this.state.time }</div>
        )
    }
}