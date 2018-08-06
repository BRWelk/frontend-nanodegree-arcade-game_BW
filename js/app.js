//***Start screen to chose player, level and start button*** BW

// Enemies our player must avoid
class Enemy {
    constructor() {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.enemyX = [-150, 500];
        this.enemyY = [60, 140, 220];
        this.varSpeed = [100, 300];
        this.reset();
    }

    reset() {
        this.x = this.enemyX[0];
        this.y = this.getRandomY();
        this.speed = this.getRandomSpeed();
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        const max_X = this.enemyX[1];
        this.x += this.speed * dt;
         if (this.x > max_X) {
            this.reset();
            }
            // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.


    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    getRandomY() {
            return this.enemyY[Math.floor(Math.random() * this.enemyY.length)];
    }

    getRandomSpeed() {
            const minSpeed = this.varSpeed[0];
            const maxSpeed = this.varSpeed[1];

            return Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed);
        }
    }


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.playerX = [-2, 250, 402];
        this.playerY = [0, 415];
        this.sprite = 'images/char-boy.png';
    }

    reset() {
        this.x = this.playerX[1];
        this.y = this.playerY[1];
        this.speed = this.getRandomSpeed();
    }


    update(dt) {
      const min_Y = this.playerY[0];
      this.y += this.speed * dt;
       if (this.y < min_Y) {
          this.reset();
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(playerInput) {
        if ('left' === playerInput) {
            this.x -= this.speed * this.xScale;
            if (this.x <= 0) {
                this.x += this.speed * this.xScale;
            }
        }
        if ('right' === playerInput) {
            this.x += this.speed * this.xScale;
            if (this.x > 400) {
                this.x -= this.speed * this.xScale;
            }
        }
        if ('up' === playerInput) {
            this.y -= this.speed;
        }
        if ('down' === playerInput) {
            this.y += this.speed;
            if (this.y > 400) {
                this.y -= this.speed;
            }
        }
    }

}
function checkCollisions() {

     }



// Now instantiate your objects.
// ***Place array for gems and secret treasure BW***
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
/*need to add levels to change speeds, add bugs and gems.  BW*/

const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();
const bug4 = new Enemy();
const bug5 = new Enemy();
const bug6 = new Enemy();





//***need to add .push to add bugs at different levels*** BW
const allEnemies = [bug1, bug2, bug3];

//***add player choice at start screen*** BW
const player = new Player();
//***add header for score, lives and level




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
