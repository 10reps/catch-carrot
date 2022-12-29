const header = document.querySelector('header');
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const timer = document.querySelector('.timer');
const time = { };

let second = 59;

function counter() {
    time.interval = setInterval(() => {
        timer.innerHTML = second;
        second--;
        
        if(second < 0) {
            clearInterval(count);
        };
    }, 1000);
};



playBtn.addEventListener("click", () => {
    if (playBtn.className === 'playBtn') {
        playBtn.classList.replace('playBtn', 'stopBtn');
        playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`;
        counter();
    } else {
        clearInterval(time.interval);
        playBtn.classList.replace('stopBtn', 'playBtn');
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    };
});

