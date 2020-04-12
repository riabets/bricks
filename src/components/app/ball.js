import { detectCollision } from "@/components/app/collisionDetection";

export default class Ball {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.image = document.getElementById('imgBall');

        this.size = 60;
        this.reset();
    }

    reset(){
        this.position = {
            x: 10,
            y: 400
        };

        this.speed = {
            x: 5,
            y: -2,
        };
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    // eslint-disable-next-line no-unused-vars
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // wall on left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // wall on top
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        //bottom
        if(this.position.y + this.size > this.gameHeight){
            this.game.lives--;
            this.reset();
        }

        // check collision with paddle
        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}