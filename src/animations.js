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

var allAnimations = [
    GamePiece1,
    GamePiece2
];

function resetAllAnimations(){
    allAnimations.forEach(function(animation){
        call(animation().reset);
    });
}

document.querySelector('.play-btn').onclick = GamePiece1().play;
document.querySelector('.pause-btn').onclick = resetAllAnimations;