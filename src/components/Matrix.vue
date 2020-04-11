<template>
    <section>
        <canvas id="gameScreen" class="game-screen" height="600" width="1000"></canvas>
    </section>
</template>

<script>
import Paddle from "@/components/app/paddle";

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

            let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

            paddle.draw(ctx);

            let lastTime = 0;

            function gameLoop(timestamp) {
                let deltaTime = timestamp - lastTime;
                lastTime = timestamp;
                ctx.clearRect(0, 0, 800, 600);
                paddle.update(deltaTime);
                paddle.draw(ctx);

                // requestAnimationFrame(gameLoop);
            }

            gameLoop();
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
        border: 1px solid white;
        background-color: white;
        margin: 30px auto;
        border-radius: 4px;
    }
</style>
