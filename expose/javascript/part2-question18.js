function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    setTimeout(getTime, 1000);
}

getTime();