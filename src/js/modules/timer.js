const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const time = Date.parse(endtime) - Date.now(),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor((time / 1000 / 60 / 60) % 24),
            days = Math.floor((time / 1000 / 60 / 60) / 24);
        return {
            total: time,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };

    const addZero = (num) => {
        if (num <= 9) {
            return "0" + num;
        } else {
            return num;
        }
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const interval = setInterval(updateClock, 0);
        updateClock();
        
        function updateClock() {
            const clock = getTimeRemaining(endtime);

            days.textContent = addZero(clock.days);
            hours.textContent = addZero(clock.hours);
            minutes.textContent = addZero(clock.minutes);
            seconds.textContent = addZero(clock.seconds);
            if (clock.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                clearInterval(interval);
            }
        }

    };
    

    setClock(id, deadline);
};

export default timer;