const currentWeekDay = document.getElementById("currentWeekDay");
const currentUTCTime= document.getElementById("currentUTCTime");

getWeekDay = ()=>{
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const currentDate = new Date();
    const day = currentDate.getDay()
    const days = weekDays[day];
    console.log(days)
    return days ;
}

getUTCTime = ()=>{
    const currentDate = new Date();
    const hours = currentDate.getUTCHours()
    const minutes = currentDate.getUTCMinutes()
    const seconds = currentDate.getUTCSeconds()
    const milliSeconds = currentDate.getUTCMilliseconds()
    const realTime = `${hours}:${minutes}:${seconds}:${milliSeconds}`
    console.log(realTime)
    return realTime;
}

currentWeekDay.innerHTML= getWeekDay();
currentUTCTime.innerHTML = getUTCTime()