import Paddle from "@/components/app/paddle";
import InputHandler from "@/components/app/input";
import Ball from "@/components/app/ball";
// import Brick from "@/components/app/brick";
import { buildLevel, level1 } from "@/components/app/levels";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, level1);

        this.gameObjects = [
            this.paddle,
            this.ball,
            ...bricks
        ]
    }

    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx))
    }
}