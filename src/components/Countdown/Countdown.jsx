import './Countdown.scss'

import { useEffect, useRef, useState } from "react";

const Countdown = () => {
    const [timeDays, setTimeDays] = useState('00');
    const [timeHours, setTimeHours] = useState('00');
    const [timeMinutes, setTimeMinutes] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');

    let interval = useRef();

    const startCountdown = () => {
        const countdownDate = new Date ('Nov 7, 2022 00:00:00').getTime();
        

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let days = Math.floor(distance / (1000*60*60*24));
            let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
            let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            let seconds = Math.floor((distance % (1000*60)) / 1000);


            if(distance < 0) {
                //stop
                clearInterval(interval.current);
            }else {
                //update
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }

        }, 1000)
    };
    useEffect(() => {
        startCountdown();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className="countdown">
            <h2 className="countdown__title">Days until my bday</h2>
            <div className="countdown__time">
                <div className='countdown__time-unit'>
                    <p>{timeDays}</p>
                    <p className='countdown__time-unit-name'>Days</p>
                </div>
                <div className='countdown__time-unit'>
                    <p>{timeHours}</p>
                    <p className='countdown__time-unit-name'>Hours</p>
                </div>

                <div className='countdown__time-unit'>
                    <p>{timeMinutes}</p>
                    <p className='countdown__time-unit-name'>Minutes</p>
                </div>
                <div className='countdown__time-unit'>
                    <p>{timeSeconds}</p>
                    <p className='countdown__time-unit-name'>Seconds</p>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
