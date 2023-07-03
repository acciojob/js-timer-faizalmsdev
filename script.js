// Get the current date
var currentDate = new Date();

// Get the day (1-31)
var day = currentDate.getDate();

// Get the month (0-11)
var month = currentDate.getMonth();

// Get the year (four digits)
var year = currentDate.getFullYear();

// Get the day (1-31)
var hrs = currentDate.getHours();

// Get the month (0-11)
var minutes = currentDate.getMinutes();

// Get the year (four digits)
var sec = currentDate.getSeconds();

const date = `${day}/${month}/${year}`;
console.log(date);
const time = `${hrs}:${minutes}:${sec}`;
console.log(time);

const timer = document.getElementById('timer');

timer.textContent = `${date},${time}`;
