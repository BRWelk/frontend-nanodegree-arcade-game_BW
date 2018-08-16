// Enemies our player must avoid


function loadGameModal() {
let lives = 4;
if (lives > 3) {
    var r = confirm(`Welcome to arcade game. Please use your arrow keys to navigate the player through the bugs. When you reach the water, the player will be reset to the start. Every 4 passes, another bug is added to the screen. Click OK to begin and GOOD LUCK!`);
if (r === true) {
    resetGame();
    this.lives -= 1;
} else {
    endGame();
}
}
}



class Enemy {
    constructor(x, y, speed) {
        // Variables applied to each of our instances go here,
        this.x = x;
        this.y = y;
        this.speed = 100 + Math.floor(Math.random() * 350); //setting random speed for Enemy and any new Enemy(s) for sub classes
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game

    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed * dt;
        if (this.x > 505) {
            this.x = -150;
            this.speed = 100 + Math.floor(Math.random() * 350); //setting update parameters for enemy off screen(500) and new Enemy start coordinate(-150)
        }

    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }
}

function checkCollisions(player, enemies) {
    for (const enemy of enemies) {
        //(x*x) + (y*y) = (d*d);
        const xDistance = player.x - enemy.x;
        const yDistance = player.y - enemy.y;
        const crtDistance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance)); //Cartesian coordinates, allows player collision to be adjusted in the if statement below
        // crtDistance is used to adjust collision point between enemy and player. Change the < # to expand or contract collision area
        if (crtDistance < 65) {
            player.x = 202;
            player.y = 405;
            player.lives -= 1; //if a collision is detected, a single player life is deducted.
        }

    }

}

/*class Gem {
    constructor(x, y) {
            // Variables applied to each of our //instances go here,
            this.x = x;
            this.y = y;
            this.level = 1;
            this.win = 0;
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = ['images/Gem Green.png', 'images/Gem Blue.png', 'images/Gem Orange.png'];
    }*/
// working on easter eggs for the board. Will create a super class to handle easter egg sprites and sub classes to handle different types of rewards and the benefits of those rewards

// Now write your own player class
class Player {
    constructor(x, y, speed = 83) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
        this.speed = speed;
        this.win = 0;
        this.level = 1;
        this.lives = 3;
    }
    // This class requires an update(), render() and
    // a handleInput() method.
    update(dt) {
        if (this.y < -5) {
            this.x = 202;
            this.y = 425;
            this.win += 1;
            if (this.win >= 4 && this.level < 5) {
                this.level += 1;
                this.win -= 5;
                enemyLevelUp();
                //nest if for gemLevelup, create function for gems, like enemyLevelUp
            }
        } else if (this.y >= 405) {
            this.y = 405;
        }
        if (this.x > 405) {
            this.x = 405;
        } else if (this.x <= 0) {
            this.x = 0;
        } else if (this.lives <= 0) {
            if (this.lives !== -5)
                var r = confirm(`Well done. CLICK OK to play again!`);
            if (r === true) {
                resetGame();
            } else {
                endGame();
            }
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(userKeyPress) {
        switch (userKeyPress) {
            case 'left':
                this.x -= this.speed * 1.2;
                break;
            case 'up':
                this.y -= this.speed;
                break;
            case 'right':
                this.x += this.speed * 1.2;
                break;
            case 'down':
                this.y += this.speed;
                break;
        }
    }

}
///Gems, Rocks, Hearts, Keys, Stars
/*class Treasures {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gems = ['images/Gem Blue.png', 'images/Gem Green.png', 'images/Gem Orange.png'];
        this.heart = 'images/Heart.png';
        this.key = 'images/Key.png';
        this.rock = 'images/Rock.png';
        this.star = 'images/Star.png';
        this.Selector = 'images/Selector.png';
        this.speed = speed;
        this.win = 0;
        this.level = 1;
        this.lives = 3;
    }
    render() {//need to figure out if I can add mulitple objects to Resources.get
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let allEnemies = [];
const yCoordinates = [60, 145, 227]; //starting coordinates on y axis for new Enemy
function initializeEnemies() {
    allEnemies = [];
    for (const enemy of yCoordinates) {
        allEnemies.push(new Enemy(-150, enemy)); //pushing new Enemey to x -150 and random y set by for of loop from yCoordinates const.
    }

}



function enemyLevelUp() {
    const randomLevelBug = Math.floor(Math.random() * 3); // creating function to add bugs as levels win increases
    allEnemies.push(new Enemy(-150, yCoordinates[randomLevelBug])); //same push as above, relating to new Enemy added for leve up
}

function endGame() {
    for (const enemy of allEnemies) {
        allEnemies.pop(); //clear board of bugs
    } //set player to middle of board
    player.x = 205;
    player.y = 200;
    player.lives = -5;
}

function resetGame() {

    initializeEnemies();
    player.x = 205;
    player.y = 405;
    player.win = 0;
    player.level = 1;
    player.lives = 3;

    //initializeEnemies();
}

/* const easterEggs = [];
const newEggs = [images/Gem Blue.png]
function gemLevelup() {
} */

// Place the player object in a variable called player
const player = new Player(205, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', ({keyCode}) => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[keyCode]);
});

loadGameModal();
