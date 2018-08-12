//***Start screen to chose player, level and start button*** BW
const level = 1;
// Enemies our player must avoid
class Enemy {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    constructor() {
||||||| 6ba337a... instantiated allEnemies and Player
    constructor(x, y, speed) {
=======
    constructor(x, y) {
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
||||||| 6ba337a... instantiated allEnemies and Player
    constructor(x, y, speed) {
=======
    constructor(x, y) {
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
||||||| 6ba337a... instantiated allEnemies and Player
    constructor(x, y, speed) {
=======
    constructor(x, y) {
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
<<<<<<< HEAD
        this.enemyX = [-150, 500];
        this.enemyY = [60, 140, 220];
        this.varSpeed = [100, 300];
        this.enemyReset();
    }

    getRandomY() {
            return this.enemyY[Math.floor(Math.random() * this.enemyY.length)];
    }

    getRandomSpeed() {
            const minSpeed = this.varSpeed[0];
            const maxSpeed = this.varSpeed[1];

            return Math.floor(Math.random() * (maxSpeed - minSpeed) + minSpeed);
        }

    enemyReset() {
        this.x = this.enemyX[0];
        this.y = this.getRandomY();
        this.speed = this.getRandomSpeed();
||||||| 6ba337a... instantiated allEnemies and Player
        this.x = x;
        this.y = y;
<<<<<<< HEAD
<<<<<<< HEAD
        this.speed = Math.floor(Math.random() * 500) +
        100;
=======
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random() * 3 +
        2);
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
||||||| 6ba337a... instantiated allEnemies and Player
        this.speed = Math.floor(Math.random() * 500) +
        100;
=======
        this.speed = Math.floor(Math.random() * 3 +
        2);
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
||||||| 6ba337a... instantiated allEnemies and Player
        this.speed = Math.floor(Math.random() * 500) +
        100;
=======
        this.speed = Math.floor(Math.random() * 3 +
        2);
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
<<<<<<< HEAD
        let max_X = this.enemyX[1];
        let max_Y = this.allEnemies;
        this.x += this.speed * dt;
         if (this.x > max_X) {
             if (this.y < max_Y)
            this.enemyReset();
        }     // You should multiply any movement by the dt parameter
||||||| 6ba337a... instantiated allEnemies and Player
        this.x += this.x + this.speed;
        if(this.x > 500) {
          this.x = -100;
        }
        // You should multiply any movement by the dt parameter
=======
        this.x += this.x + this.speed;
        if(this.x > 500) {
          this.x = -100;
        }
        // You should multiply any movement by the dt parameter
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
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
    constructor() {
        this.playerX = [250, 402];
        this.playerY = [0, 400];
        this.sprite = 'images/char-boy.png';
        this.playerSpeed = [83, 100];
        this.playerReset();
    }

    playerReset() {
        this.x = this.playerX[0];
        this.y = this.playerY[1];

    }


    update(dt) {
      const min_Y = this.playerY[0];

      this.y += this.speed * dt;
       if (this.y <= min_Y) {
          this.playerReset();
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(playerInput) {
        if ('left' === playerInput) {
            this.x -= this.speed /* this.xScale;*/
            if (this.x <= 0) {
                this.x += this.speed /* this.xScale;*/
            }
        }
        if ('right' === playerInput) {
            this.x += this.speed; /* this.xScale;*/
            if (this.x > 400) {
                this.x -= this.speed; /* this.xScale;*/
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
  //if (this.enemyX === this.playerX && this.enemyY === this.playY){
    //this.playerReset;
  }




// Now instantiate your objects.
// ***Place array for gems and secret treasure BW***
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/*need to add levels to change speeds, add bugs and gems.  BW*/

const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();
const bug4 = new Enemy();
const bug5 = new Enemy();
const bug6 = new Enemy();





//***need to add .push to add bugs at different levels*** BW
const allEnemies = [bug1, bug2, bug3];


function max_X() {
    for(const enemy_Y of allEnemies) {
      return enemy_Y;
    }
    if (enemy_Y > 2){
        this.playerReset;
    }

}



//***add player choice at start screen*** BW
||||||| 6ba337a... instantiated allEnemies and Player

const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();

const allEnemies = [bug1, bug2, bug3];

=======
const allEnemies = [];
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
||||||| 6ba337a... instantiated allEnemies and Player

const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();

const allEnemies = [bug1, bug2, bug3];

=======
const allEnemies = [];
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
||||||| 6ba337a... instantiated allEnemies and Player

const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();

const allEnemies = [bug1, bug2, bug3];

=======
const allEnemies = [];
>>>>>>> parent of 6ba337a... instantiated allEnemies and Player
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
