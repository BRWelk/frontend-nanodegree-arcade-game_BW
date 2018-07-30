// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random() * 3 +
        2);
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.x += this.x + this.speed;
        if(this.x > 500) {
          this.x = -100;
        }
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x = 200, y = 395, speed = 83) {
        this.xScale = 1.2;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/char-boy.png';

    }
    update(dt) {
          if(this.y < 0) {
          this.y = 395;
          this.x = 200;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(playerInput) {
        if ('left' === playerInput) {
            this.x -= this.speed * this.xScale;
            console.log(this.speed);
        }
        if ('right' === playerInput) {
            this.x += this.speed * this.xScale;
        }
        if ('up' === playerInput) {
            this.y -= this.speed;
        }
        if ('down' === playerInput) {
            this.y += this.speed;
        }
    }

}

function checkCollisions() {

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', e => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
