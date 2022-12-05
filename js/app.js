let seconds = 0
function startTime() {
    seconds += 1;
    document.getElementById("seconds").innerHTML = seconds;
}
let cancel = setInterval(startTime,1000);