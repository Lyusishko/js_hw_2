// при условии что количество введенных дней будет не больше 365

if (months <= 1) {
    console.log('Январь');   
} else if (months <= 2) {
    console.log('Февраль');
} else if (months <= 3) {
    console.log('Март');
} else if (months <= 4) {
    console.log('Апрель');
} else if (months <= 5) {
    console.log('Май');
} else if (months <= 6) {
    console.log('Июнь');
} else if (months <= 7) {
    console.log('Июль');
} else if (months <= 8) {
    console.log('Август');
} else if (months <= 9) {
    console.log('Сентябрь');
} else if (months <= 10) {
    console.log('Октябрь');
} else if (months <= 11) {
    console.log('Ноябрь');
} else {
    console.log('Декабрь');
}

switch(months) {  //позволяет работать только с целыми числами
    case 1:
    case 2:
    case 12:
        console.log('Зима');
    break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
    break;
    default:
}