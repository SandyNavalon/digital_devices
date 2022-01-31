import './DigitalClock.scss'

import { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [clockStateHours, setClockStateHours ] = useState();
    const [clockStateMinutes, setClockStateMinutes ] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();

            let minutes = date.getMinutes();
            minutes = minutes > 9 ? minutes : '0' + minutes;

            setClockStateHours(date.getHours());
            setClockStateMinutes(minutes)
        }, 1000);
    }, []);

  return (
  <>
    <div className='clock'>
    <div className='clock__box'>
      <div className='clock__box-color'></div>
        {/* <div className='background-grainy'></div> */}
          <div className='clock__count'>
            <div className='clock__count-insideBorder'></div>
              <h2 className='clock__count-numbers'>
                {clockStateHours}:{clockStateMinutes}
              </h2>
          </div>
        <div className='clock__btns'>
          <span className='clock__btns-btn'></span>
          <span className='clock__btns-btn'></span>
          <span className='clock__btns-btn'></span>
      </div>
    </div>
  </div>
  </>
  );
};

export default DigitalClock;
