export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 140;
        this.height = 30;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        console.log(ctx);
    }

    update(deltaTime) {
        if(!deltaTime){
            return;
        }
        this.position.x += 5 / deltaTime;
    }
}
