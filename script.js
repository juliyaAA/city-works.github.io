window.addEventListener('load', function () {
    const btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        window.location.reload();
    });

    let clocks = () => {
        let minutes = document.querySelector(".minutes"),
            seconds = document.querySelector(".seconds"),
            colon = document.querySelector(".colon"),
            minutes_data = minutes.dataset.min,
            seconds_data = seconds.dataset.sec;

        let timer = setInterval(function () {
            minutes.innerHTML = minutes_data;
            colon.innerHTML = ':';
            seconds.innerHTML = seconds_data--;

            if (seconds_data < 10) {
                seconds.innerHTML = '0' + seconds_data;
            }
            if (minutes_data < 10) {
                minutes.innerHTML = '0' + minutes_data;
            }
            if (seconds_data == 0) {
                seconds_data = 59;
                minutes_data--;
                if (minutes_data < 0) {
                    clearInterval(timer);
                    window.location.reload();
                }
            }
        }, 1000);
    }
    clocks();
});