import Paddle from "@/components/app/paddle";
import InputHandler from "@/components/app/input";
import Ball from "@/components/app/ball";
import { buildLevel, level1, level2, level3 } from "@/components/app/levels";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects = [];
        this.bricks = [];
        this.lives = 3;
        this.levels = [level1, level2, level3];
        this.currentLevel = 0;
        new InputHandler(this.paddle, this);
    }

    start() {
        if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) {
            return;
        }
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);

        this.ball.reset();

        this.gameObjects = [
            this.paddle,
            this.ball
        ];

        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltaTime) {
        if (this.lives === 0) {
            this.gamestate = GAMESTATE.GAMEOVER;
        }
        if (this.gamestate === GAMESTATE.PAUSED ||
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER) {
            return;
        }

        if(this.bricks.length === 0){
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }

        [...this.gameObjects, ...this.bricks].forEach((object) => object.update(deltaTime));
        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion)
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));

        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgba(255,129,168,0.8)';
            ctx.fill();

            ctx.font = "30px PressStart, serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = '#ffd99d';
            ctx.fill();

            ctx.font = "30px PressStart, serif";
            ctx.fillStyle = "#4c6d95";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR To Start", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgba(255, 217, 157,0.8)';
            ctx.fill();

            ctx.font = "30px PressStart, serif";
            ctx.fillStyle = "#4c6d95";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}