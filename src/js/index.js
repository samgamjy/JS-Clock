const button = document.querySelector('.switcher-mode');

button.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
        
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
})

function setDate() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const dateString = document.querySelector('.dateTime');

    const languageArr = document.querySelector('#lang-active').getElementsByTagName('option');

    let language = 'ru';
    for (let item of languageArr) {
        if (item.selected) {
            language = item.value;
        }
    }
    
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const time = `${hours}:${minutes}:${seconds}`;

    const secondDegrees = ((seconds / 60) * 360 + 90);
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    const hoursDegrees = ((hours / 12) * 360 + 90);

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const day = new Date(now).toLocaleDateString(language, options);

    dateString.textContent = `${time} ${day}`;
}
setInterval(setDate, 1000);