const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate.toString()}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function formatDateLong(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `Formatted Date (Month Day, Year): ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
