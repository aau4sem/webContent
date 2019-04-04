function getSelected() {
    var sel = document.getElementById('selector');
    var opt;
    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt.value;
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

const animationsList = {
    GamePiece1: GamePiece1(),
    GamePiece2: GamePiece2()
};

function playAllAnimations() {
    for (const key in animationsList){
        animationsList[key].play();
    }
}

function resetAllAnimations() {
    for (const key in animationsList){
        animationsList[key].reset();
    }
}

function playSelectedAnimation() {
    if (getSelected() === "Simultaneously") {
        playAllAnimations();
    } else {
        getSelectedGamePiece().play();
    }
}

function restartSelectedAnimation() {
    if (getSelected() === "Simultaneously") {
        resetAllAnimations();
        playAllAnimations();
    } else {
        getSelectedGamePiece().restart();
    }
}

function getSelectedGamePiece() {
    return animationsList[getSelected()];
}

function resetSelectedAnimation(){
    getSelectedGamePiece().reset();
}

document.querySelector('.play-btn').onclick = playSelectedAnimation;
document.querySelector('.restart-btn').onclick = restartSelectedAnimation;
document.querySelector('.reset-btn').onclick = resetAllAnimations;