window.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        window.location.reload();
    });

    let clocks = () => {
        let minutes = document.body.querySelector(".minutes");
        let seconds = document.body.querySelector(".seconds");    
        let minutes_data = 01;
        let seconds_data = 59;
       
        let timer = setInterval(function() {
            minutes.innerHTML = minutes_data;
            seconds.innerHTML = seconds_data-- ;
       
            if(seconds_data < 10) { 
                seconds.innerHTML = '<span>0</span>' + seconds_data;
            }
            if(minutes_data < 10) {
                minutes.innerHTML = '<span>0</span>' + minutes_data;
            }
            if(seconds_data == 0) {
                seconds_data = 59;
                minutes_data--;
                if(minutes_data < 0) {
                    clearInterval(timer);
                    window.location.reload();
                }

            }
        }, 1000);  
       
        }
        clocks();
});