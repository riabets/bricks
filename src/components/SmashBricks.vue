<template>
    <section>
        <img id="imgBall" class="game-img" src="./../assets/baseball.png" alt="">
        <img id="imgBrick" class="game-img" src="./../assets/brick.png" alt="">
        <canvas id="gameScreen" class="game-screen" height="600" width="800"></canvas>
    </section>
</template>

<script>
import Game from "@/components/app/game";

export default {
    name: "Matrix",
    data() {
        return {}
    },
    mounted() {
        this.initCanvas();
    },
    methods: {
        initCanvas() {
            let canvas = document.getElementById('gameScreen');
            let ctx = canvas.getContext('2d');

            const GAME_WIDTH = 800;
            const GAME_HEIGHT = 600;

            let lastTime = 0;

            let game = new Game(GAME_WIDTH, GAME_HEIGHT);

            function gameLoop(timestamp) {
                let deltaTime = timestamp - lastTime;
                lastTime = timestamp;
                ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

                game.update(deltaTime);
                game.draw(ctx);

                requestAnimationFrame(gameLoop);
            }

            requestAnimationFrame(gameLoop);
        },
    }
}
</script>
<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        height: 100vh;
    }

    .game-screen {
        border: 1px solid #A0D5C7;
        background-color: white;
        margin: 30px auto;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .game-img {
        display: none;
    }
</style>
