$(document).ready(() => {
    
    // Game Object
    let gameController = {
        health: 0,
        score: 0,
        level: 0,
        outcome: null,
        createBoxes: function() {
            for(let i = 0; i < 30; i++){
                let box = {}
                box.randomX = Math.floor(Math.random() * 11) * 10;
                box.randomY = Math.floor(Math.random() * 11) * 10;
                boxes.push(box);
            }

            // append to page on interval
            setInterval(() => {
                let randomBox = Math.floor(Math.random() * boxes.length + 1);
                console.log(boxes[randomBox]);
                // $('#game')
                //     .append('<div class="square"></div>')
                //     .css({'top': })

            }, 2000);

        }
    }

    // Box Array
    let boxes = [

    ]

    // Start New Game
    $('#newgame').on('click', () => {
        gameController.createBoxes();
    });


});