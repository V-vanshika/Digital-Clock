function updateClock() {
    const now = new Date();
    const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

    const day = dayNames[now.getDay()];
    const date = `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('Day').textContent = day;
    document.getElementById('Date').textContent = date; 
    document.getElementById('Time').textContent = `${hours}:${minutes}:${seconds}`;
};
setInterval(updateClock, 1000);
updateClock();