const date_now = new Date();
//console.log(date_now);
const date_NEWYEAR = new Date(date_now.getFullYear()+1, 0, 1);
//console.log(date_NEWYEAR);
const days = (date_NEWYEAR-date_now) / (1000 * 60 * 60 * 24);
console.log("До нового года осталось", days.toFixed(1), "дней");
