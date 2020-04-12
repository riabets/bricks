import { detectCollision } from "@/components/app/collisionDetection";

export default class Brick {
    constructor(game, position) {
        this.game = game;

        this.image = document.getElementById('imgBrick');

        this.position = position;

        this.width = 100;
        this.height = 30;

        this.markedForDeletion = false;
    }

    update(){
        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}