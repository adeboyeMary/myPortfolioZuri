console.log('working');

function setDay () {
    const currentDate = new Date();
    const dayOfTheWeek = currentDate.toLocaleString('en-US', { weekday: 'long'});
    return dayOfTheWeek;
};
document.getElementById("currentDayOfTheWeek").innerHTML=setDay();

function setTime (){
    const d = new Date();
    const time = d.getTime();
    document.getElementById("currentUTCTime").innerHTML=time;
}

setInterval(setTime, 1000);