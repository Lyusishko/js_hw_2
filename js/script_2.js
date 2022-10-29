let thisYear = prompt ('Какой сейчас год?');
    bd = confirm ('У Вас уже был день рождения в текущем году?');
    z = 1;

if (bd == true) {
    console.log(thisYear - age);
} else {
    console.log(thisYear - age - z);
}