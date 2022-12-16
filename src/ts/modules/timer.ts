const timer = (id: number | string, deadline: string | number): void => {

    const addZero = (num: number): number | string => {
        if (num <= 9) {
            return '0' + num
        } else {
            return num;
        }
    }

    const getTimerRemaning = (endtime: any): object => {
        const time: number = Date.parse(endtime) - Date.parse(new Date());
        const seconds: number = Math.floor((time / 1000) % 60);
        const minuts: number = Math.floor((time / 1000 / 60) % 60);
        const hours: number = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days: number = Math.floor((time / (1000 * 60 * 60 * 24)));

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minuts': minuts,
            'seconds': seconds
        };
    }

    const setClock = (selector: any, endtime: any): void => {
        const timer: NodeListOf<HTMLElement> = document.querySelector(selector);
        const days: any = timer.querySelector('#days');
        const hours: any = timer.querySelector('#hours');
        const minuts: any = timer.querySelector('#minuts');
        const seconds: any = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const time = getTimerRemaning(endtime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minuts.textContent = addZero(time.minuts);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minuts.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);

            }
        }
    };

    setClock(id, deadline);
};

export default timer;