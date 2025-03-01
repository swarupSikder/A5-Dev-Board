const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

//days array
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date().getDay();

//months array
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
document.getElementById('heading-day').innerText = days[today];
document.getElementById('heading-date').innerText = `${day} ${months[month - 1]} ${year}`;

//current date function
function getCurrentTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am_pm = hours >= 12 ? "PM" : "AM";

    h = h % 12 || 12;
    let minutesFormatted = m.toString().padStart(2, "0");
    let secondsFormatted = s.toString().padStart(2, "0");

    return `${h}:${minutesFormatted}:${secondsFormatted} ${am_pm}`;
}