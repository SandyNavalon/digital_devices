import './Chrono.scss'

import { useEffect, useState } from "react"

const Chrono = () => {
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timeOn) {

            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);

        }else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timeOn]);

        return (
        <div className='chrono'>
            <div className='chrono__background'>
                <div className='chrono__numbers'>
                    <div className='chrono__numbers-time'>
                        <p>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</p>
                        <p>&nbsp;:&nbsp;</p>
                    </div>
                    <div className='chrono__numbers-time'>
                        <p>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</p>
                        <p>&nbsp;:&nbsp;</p>
                    </div>
                    <div className='chrono__numbers-time'>
                        <p>{("0" + ((time / 10) % 100)).slice(-2)}</p>
                    </div>
                </div>
            </div>
            <div className='chrono__btns'>
                {!timeOn && time === 0 && (
                    <button onClick={() => setTimeOn(true)}>Start</button>
                )}
                {timeOn && (
                    <button onClick={() => setTimeOn(false)}>Stop</button>
                )}
                {!timeOn && time > 0 && (
                    <button onClick={() => setTime(0)}>Reset</button>
                )}
                {!timeOn && time > 0 && (
                    <button onClick={() => setTimeOn(true)}>Resume</button>
                )}
            </div>
        </div>
        );
};

export default Chrono;