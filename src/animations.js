function getSelected() {
    var sel = document.getElementById('selector');
    var opt;
    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}

function GamePiece1() {
    return anime({
        targets: '.p1',
        translateX: 270,
        loop: false,
        autoplay: false
    });
}

function GamePiece2() {
    return anime({
        targets: '.p9',
        translateX: 270,
        loop: false,
        autoplay: false
    });
}

const allAnimations = [GamePiece1(), GamePiece2()];

function playAllAnimations(){
    allAnimations.forEach(function (anim) {
        anim.play();
    });
}

function resetAllAnimations(){
    allAnimations.forEach(function (anim) {
        anim.reset();
    });
}

function playSelectedAnimation(){
    const selected = getSelected().value;

    if (selected === "Simultaneously"){
        playAllAnimations();
    } else {
        window[selected]().play();
    }
}

function restartSelectedAnimation(){
    const selected = getSelected().value;

    window[selected]().restart();
}

document.querySelector('.play-btn').onclick = playSelectedAnimation;
document.querySelector('.restart-btn').onclick = restartSelectedAnimation;
document.querySelector('.reset-btn').onclick = resetAllAnimations;