$(document).ready(() => {
    
// Game Controller Object
let gameController = {
    health: 0,
    score: 0,
    level: 0,
    outcome: null,
    boxes: [],
    boxesInGame: []
}

// score update function
gameController.scoreUpdate = () => {
    gameController.score += 10;
    $('#score').text(`Score: ${gameController.score}`);
}

// game reset function
gameController.gameReset = () => {
    gameController.health = 0;
    gameController.score = 0;
    $('#score').text(`Score: ${gameController.score}`);
    gameController.boxes = [];
    $('#game .square').css('display', 'none');
}

// // remove box function
// gameController.boxRemoval = () => {

//     gameController.boxesInGame[0]
// }

// Box Creation Object
let boxCreator = {}

// create random box array and append boxes to page on interval
boxCreator.createBoxes = () => {
    for(let i = 0; i < 500; i++){
        let box = {}
        box.randomX = Math.floor(Math.random() * 11) * 10;
        box.randomY = Math.floor(Math.random() * 11) * 10;
        box.color = boxCreator.randomColor();
        box.name = `box${i}`; 
        gameController.boxes.push(box);
    }
    // append random box to page on interval
    setInterval(() => {
        let boxes = gameController.boxes;
        // get random box
        let randomBox = Math.floor(Math.random() * boxes.length + 1);
        // append box to page
        $('#game').append(
            `<div class="square" id="${boxes[randomBox].name}"></div>`
        );
        // customize box based on boxes properties
        $(`#game #${boxes[randomBox].name}`).css({
            'top': boxes[randomBox].randomX + '%', 
            'left': boxes[randomBox].randomY + '%',
            'background': boxes[randomBox].color
        })
        // place boxes to in game box array
        gameController.boxesInGame.push(boxes[randomBox]);
    }, 1000);
}

// random box color function
boxCreator.randomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// box destroy function
$('#game').on('click', '.square', (e) => {
    // hide square on click
    let box = document.getElementById(e.target.id);
    box.style.display = 'none';
    // update player score
    gameController.scoreUpdate();
});


// start new game
$('#newgame').on('click', () => {
    gameController.gameReset();
    setTimeout(() => {
        boxCreator.createBoxes();
    }, 1000)
});


}); // emd of document ready