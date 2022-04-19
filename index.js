document.querySelectorAll("button")[0].addEventListener("click", crash);

function crash() {
    var audio = new Audio("crash.mp3");
    audio.play();
}


document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyW') {
        var audio = new Audio("crash.mp3");
        audio.play();

    }
});



document.querySelectorAll("button")[1].addEventListener("click", kick);

function kick() {
    var audio = new Audio("kick-bass.mp3");
    audio.play();
}


document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyA') {
        var audio = new Audio("kick-bass.mp3");
        audio.play();

    }
});





document.querySelectorAll("button")[2].addEventListener("click", snare);

function snare() {
    var audio = new Audio("snare.mp3");
    audio.play();
}

document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyS') {
        var audio = new Audio("snare.mp3");
        audio.play();

    }
});




document.querySelectorAll("button")[3].addEventListener("click", tom1);

function tom1() {
    var audio = new Audio("tom-1.mp3");
    audio.play();
}

document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyD') {
        var audio = new Audio("tom-1.mp3");
        audio.play();

    }
});


function tom1() {
    var audio = new Audio("tom-1.mp3");
    audio.play();
}

document.querySelectorAll("button")[4].addEventListener("click", tom2);

function tom2() {
    var audio = new Audio("tom-2.mp3");
    audio.play();
}

document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyJ') {
        var audio = new Audio("tom-2.mp3");
        audio.play();

    }
});






document.querySelectorAll("button")[5].addEventListener("click", tom3);

function tom3() {
    var audio = new Audio("tom-3.mp3");
    audio.play();
}
document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyK') {
        var audio = new Audio("tom-3.mp3");
        audio.play();

    }
});

document.querySelectorAll("button")[6].addEventListener("click", tom4);

function tom4() {
    var audio = new Audio("tom-4.mp3");
    audio.play();
}

document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyH') {
        var audio = new Audio("tom-4.mp3");
        audio.play();

    }
});
// var num = document.querySelectorAll("button").length;

// for(var i = 0 ; i < num ; i++){
//     if(i==0){
// document.querySelectorAll(".btn")[i].addEventListener("click" , crash);
