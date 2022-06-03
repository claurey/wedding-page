import React, { useEffect } from 'react'

const Conteo = () => {

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse("Thu Dec 08 2022 14:00:00 GMT-0500"));

useEffect(() => {
    initializeClock('clockdiv', deadline);
  
}, []);


  return (
    <div>

        <div id="clockdiv">
        <div>
            <span className="days"></span>
            <div className="smalltext">Días</div>
        </div>
        <div>
            <span className="hours"></span>
            <div className="smalltext">Horas</div>
        </div>
        <div>
            <span className="minutes"></span>
            <div className="smalltext">Minutos</div>
        </div>
        <div>
            <span className="seconds"></span>
            <div className="smalltext">Segundos</div>
        </div>
    </div>
    </div>
  )
}

export default Conteo