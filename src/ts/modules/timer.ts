const timer = (id: string, deadline: string): void => {

    const addZero = (num: number): string => num <= 9 ? `0${num}` : String(num);
    interface ITimer {
        total: number;
        seconds: number;
        minutes: number;
        hours: number;
        days: number;
    }

    const getTimerRemaning = (endtime: string): ITimer => {
        const time: number = Date.parse(endtime) - Date.parse(String(new Date()));
        const seconds: number = Math.floor((time / 1000) % 60);
        const minutes: number = Math.floor((time / 1000 / 60) % 60);
        const hours: number = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days: number = Math.floor((time / (1000 * 60 * 60 * 24)));

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    const setClock = (selector: string, endtime: string): void => {
        const timer: any = document.querySelector(selector);
        const days: any = timer.querySelector('#days');
        const hours: any = timer.querySelector('#hours');
        const minutes: any = timer.querySelector('#minutes');
        const seconds: any = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const time: ITimer = getTimerRemaning(endtime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);

            }
        }
    };

    setClock(id, deadline);
};

export default timer;