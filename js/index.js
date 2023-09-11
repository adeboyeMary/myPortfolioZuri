console.log('working');

function myDay () {
    const currentDate = new Date();
    const dayOfTheWeek = currentDate.toLocaleString('en-US', { weekday: 'long'});
    // console.log(dayOfTheWeek);
    return dayOfTheWeek;
};
document.getElementById("p1").innerHTML=myDay();

function myUTCTime (){
    const d = new Date();
    const time = d.getUTCMilliseconds();
    console.log(time);
    return time;
};
document.getElementById("p2").innerHTML=myUTCTime();
