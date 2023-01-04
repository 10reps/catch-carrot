const section = document.querySelector('section');
const header = document.querySelector('header');
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const restart = document.querySelector('.restart');
const timer = document.querySelector('.timer');
const time = { };

const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');

let second = 59;

function counter() {
    time.interval = setInterval(() => {
        timer.innerHTML = second;
        second--;
        
        if(second < 0) {
            clearInterval(time.interval);
        };
    }, 1000);
};

playBtn.addEventListener("click", () => {
    if (playBtn.className === 'playBtn') {
        playBtn.classList.replace('playBtn', 'stopBtn');
        playBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`;
        
        let carrotHeight = Math.floor(Math.random() * 300);
        let carrotWidth = Math.floor(Math.random() * 1100);
        let bugHeight = Math.floor(Math.random() * 300);
        let bugWidth = Math.floor(Math.random() * 1100);

        carrot.style.top = `${carrotHeight}px`;
        carrot.style.left = `${carrotWidth}px`;
        bug.style.top = `${bugHeight}px`;
        bug.style.left = `${bugWidth}px`;

        counter();
        
    } else if (playBtn.className === 'stopBtn') {
        clearInterval(time.interval);
        playBtn.style.visibility = 'hidden';
        
        const footer = document.createElement('footer');
        section.appendChild(footer);
        footer.innerHTML = `<button class="restart" type="button"><i class="fa-solid fa-rotate-right"></i></button>
        <span class="result">YOU LOST</span>`;
    };
});

$(document).on("click", 'restart', () => {

});