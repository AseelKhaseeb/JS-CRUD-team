let countDownDate = new Date("DEC 30, 2022 23:23:59").getTime(1000);
// console.log(countDownDate);

let counter = setInterval(()=> {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    // console.log(days);

    let hours = Math.floor((dateDiff % (1000 * 60 *60 *24))/(1000 *60 *60));
    
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));

    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000);


    document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".min").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
    document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(dateDiff<0){
        clearInterval(counter);

    }

},1000);
