const date = new Date();


//знайти дів тайм і передати туди це значення
let currentTime = date.toLocaleTimeString();
console.log(currentTime);


//знайти дів дата та передати туди все крім часу
let options = {month: 'long', day: 'numeric', weekday: 'long'};
let currentDate = date.toLocaleDateString('de-De', options);
console.log(currentDate);

// const currentTime = date.toLocaleTimeString();
function showTime() {

    setTimeout(showTime, 1000);
    function showDate(){}
}
showTime();




