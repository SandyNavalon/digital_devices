import './Countdown.scss'

import { useEffect, useState } from "react";

const Countdown = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        let countdownDate = new Date('Nov 7, 2022 00:00:00').getTime();

        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countdownDate - now;
            let days = Math.floor(distance / (1000*60*60*24));
            let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
            let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
            let seconds = Math.floor((distance % (1000*60)) / 1000);

            setTime(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's');

            if(distance < 0) {
                clearInterval(x);
                setTime('COUNTDOWN IS OVER!')
            }
        }, 1000);
    }, []);


    return (
        <div className="countdown">
            <h2 className="countdown__title">Days until my bday</h2>
            <h2 className="countdown__time">{time}</h2>
        </div>
    );
}

export default Countdown;
