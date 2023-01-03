const header = document.querySelector('header');
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const timer = document.querySelector('.timer');
const time = { };

const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');

let second = 59;

function counter() {
    time.interval = setInterval(() => {
        timer.innerHTML = second;
        second--;

        let carrotHeight = Math.floor(Math.random() * 300);
        let carrotWidth = Math.floor(Math.random() * 1100);
        let bugHeight = Math.floor(Math.random() * 300);
        let bugWidth = Math.floor(Math.random() * 1100);

        carrot.style.top = `${carrotHeight}px`;
        carrot.style.left = `${carrotWidth}px`;
        bug.style.top = `${bugHeight}px`;
        bug.style.left = `${bugWidth}px`;
        
        if(second < 0) {
            clearInterval(time.interval);
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

