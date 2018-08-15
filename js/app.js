// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
            // Variables applied to each of our //instances go here,
            this.x = x;
            this.y = y
            this.speed = 100 + Math.floor(Math.random() * 250);
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
            this.speed = 100 + Math.floor(Math.random() * 300);
        }

    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}
}

function checkCollisions(player, enemies) {
    for (const enemy of enemies){
        //(x*x) + (y*y) = (d*d);
        const xDistance = player.x - enemy.x;
        const yDistance = player.y - enemy.y;
        const crtDistance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
        if (crtDistance < 55) {
            player.x = 205;
            player.y = 405;
            player.lives -= 1;
        }

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
    }
    // This class requires an update(), render() and
    // a handleInput() method.
    update(dt) {
        if (this.y < -5) {
            this.x = 203;
            this.y = 425;
            this.win += 1;
            if (this.win >= 5 && this.level < 5) {
                this.level += 1;
                this.win -= 5;
                enemyLevelUp();
                //nest if for gemLevelup, create function for gems, like enemyLevelUp
                }
        } else if (this.y >= 405) {
            this.y = 405;
        } if (this.x > 405) {
            this.x = 405;
        } else if (this.x <= 0){
            this.x = 0;
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
            case 'up': this.y -= this.speed;
                break;
            case 'right': this.x += this.speed * 1.2;
                break;
            case 'down': this.y += this.speed;
                break;
        }
    }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies


const allEnemies = [];
const newEnemy = [60, 145, 227];
for (const enemy of newEnemy) {
    allEnemies.push(new Enemy(-150, enemy));
    }
function enemyLevelUp() {
    const randomLevelBug = Math.floor(Math.random() * 3);
    allEnemies.push(new Enemy(-150, newEnemy[randomLevelBug]));
}

function endGame() {
    alert("You are a loser");
    allEnemies = [];
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
