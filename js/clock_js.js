document.addEventListener('DOMContentLoaded', function() {
    const dayElement = document.getElementById('d');
    const monthElement = document.getElementById('mon');
    const yearElement = document.getElementById('y');
    const weekdayElement = document.getElementById('w');
    const hourElement = document.getElementById('h');
    const minuteElement = document.getElementById('m');
    const secondElement = document.getElementById('s');

    function updateClock() {
        const now = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const day = now.getDate();
        const weekday = daysOfWeek[now.getDay()];
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        dayElement.textContent = day;
        monthElement.textContent = month;
        yearElement.textContent = year;
        weekdayElement.textContent = weekday;
        hourElement.textContent = hours < 10 ? `0${hours}` : hours;
        minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    updateClock(); // Инициализация часов и даты
    setInterval(updateClock, 1000); // Обновление часов и даты каждую секунду
});