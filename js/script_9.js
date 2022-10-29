let amountOfDay = prompt ('Введите любое количество дней для вычисления');
    years = amountOfDay / 365;
    months = amountOfDay / 31;
    weeks = amountOfDay / 7;
    hours = amountOfDay * 24;
    minutes = amountOfDay * 1440;
    seconds = amountOfDay * 86400;

console.log(years + ' лет ');
console.log(months + ' месяцев ');
console.log(weeks + ' недель ');
console.log(hours + ' часов ');
console.log(minutes + ' минут ');
console.log(seconds + ' секунд ');

if (years < 1) console.log('Меньше года');
if (months < 1) console.log('Меньше месяца');
if (weeks < 1) console.log('Меньше недели');


