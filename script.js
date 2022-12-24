// var start = new Date().getTime();
// var startt = new Date();
// console.log(start);
// console.log(startt);
// console.log(startt + 'wow');
// console.log(startt + 'is the full time function');

// var end = new Date().getTime();
// console.log(end);

// console.log(((end - start)/1000) + 's');




var start = new Date().getTime();

function getRandomColor(){
    var letters = '0123456789abcdef'.split('');
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}

function makeShapeAppear() {

    document.getElementById('shape').style.display = 'block';
    start = new Date().getTime();

    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width = (Math.random() * 400) + 100;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius ="50%";
    }else{
        document.getElementById("shape").style.borderRadius ="0";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.top = top + "px";
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

document.getElementById('shape').onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay();
}
