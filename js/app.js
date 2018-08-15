// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
<<<<<<< HEAD
        // Variables applied to each of our instances go here,
        this.x = x;
        this.y = y
        this.speed = 100 + Math.floor(Math.random() * 250);
||||||| merged common ancestors
            // Variables applied to each of our //instances go here,
            this.x = x;
            this.y = y
            this.speed = 100 + Math.floor(Math.random() * 250);
=======
            // Variables applied to each of our //instances go here,
            this.x = x;
            this.y = y
            this.speed = 100 + Math.floor(Math.random() * 350);
>>>>>>> 53228fc16c03bc1dfe9986d3b8bcf77062a11f75
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
        if (this.x > 500) {
            this.x = -150;
            this.speed = 100 + Math.floor(Math.random() * 250);
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
        const crtDistance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
<<<<<<< HEAD
        if (crtDistance < 45) {
||||||| merged common ancestors
        if (crtDistance < 55) {
=======
        if (crtDistance < 65) {
>>>>>>> 53228fc16c03bc1dfe9986d3b8bcf77062a11f75
            player.x = 202;
            player.y = 405;
            player.lives -= 1;
        }

    }

}

class Gem {
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
    }
  update(dt) {
    if (this.y < 0) {
        this.x = 205;
        this.y = 405;
        this.win += 1;
        if (this.win >= 5 && this.level < 5) {
            this.level += 1;
            this.win -= 5;
            GemLevelUp();
            //nest if for gemLevelup, create function for gems, like enemyLevelUp
            }
  }


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
        //this.gems = 0;
    }
    // This class requires an update(), render() and
    // a handleInput() method.
    update(dt) {
        if (this.y < 0) {
            this.x = 205;
            this.y = 405;
            this.win += 1;
            if (this.win >= 5 && this.level < 5) {
                this.level += 1;
                this.win -= 5;
                enemyLevelUp();
                //nest if for gemLevelup, create function for gems, like enemyLevelUp
<<<<<<< HEAD
            }
        } else if (this.y >= 390) {
            this.y = 380;
        }
        if (this.x > 500) {
||||||| merged common ancestors
                }
        } else if (this.y >= 390) {
            this.y = 380;
        } if (this.x > 500) {
=======
                }
        } else if (this.y > 405) {
            this.y = 405;
        } if (this.x > 405) {
>>>>>>> 53228fc16c03bc1dfe9986d3b8bcf77062a11f75
            this.x = 405;
<<<<<<< HEAD
        } else if (this.x <= 0) {
            this.x = 5;
||||||| merged common ancestors
        } else if (this.x <= 0){
            this.x = 5;
=======
        } else if (this.x < 0){
            this.x = 0;
>>>>>>> 53228fc16c03bc1dfe9986d3b8bcf77062a11f75
        }
        if (this.lives <= 0) {
            endGame();
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

const allEnemies = [];
const newEnemy = [65, 145, 225];
for (const enemy of newEnemy) {
    allEnemies.push(new Enemy(-150, enemy));
}
function enemyLevelUp() {
    const randomLevelBug = Math.floor(Math.random() * 3);
    allEnemies.push(new Enemy(200, newEnemy[randomLevelBug]));
}

const allGems = [];
const newGemsY = [65, 145, 225];
for (const newGems of newGemsY) {
  allGems.push(new Gem(newGems))
}
const newGemsX = this.randomX();
function gemLevelUp() {
    const randomLevelGem = Math.floor(Math.random() * 3);
    allGems.push(new Gems(200, newGems[gemLevelUp]));
}



function endGame() {
    alert("You are a loser");
    this.allEnemies = [];
    player.speed = 0;

}

// Place the player object in a variable called player
const player = new Player(205, 405);

//checkCollisions(player, allEnemies);

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
