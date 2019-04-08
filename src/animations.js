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
        keyframes: [
            {left:656 , top:508},
            {left:458 , top:522},
            {left:276 , top:526},
            {left:202 , top:430},
        ],
        loop: false,
        easing: 'linear',
        duration: 2500,
        autoplay: false
    });
}

function GamePiece2() {
    return anime({
        targets: '.p9',
        keyframes: [
            {left:687 , top:353},
            {left:607 , top:217},
            {left:334 , top:165},
            {left:263 , top:282},
        ],
        loop: false,
        easing: 'linear',
        duration: 2500,
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
    if (getSelected() === "Simultaneously") {
        resetAllAnimations();
    } else {
        getSelectedGamePiece().reset();
    }
}

document.querySelector('.play-btn').onclick = playSelectedAnimation;
document.querySelector('.restart-btn').onclick = restartSelectedAnimation;
document.querySelector('.reset-btn').onclick = resetSelectedAnimation;