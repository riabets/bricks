<template>
    <div class="poppuri">
        <div class="treat-wrapper">
            <button class="treat-button">Treats!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Poppuri",
    mounted() {
        this.shoot();
    },
    methods: {
        shoot() {
            console.clear();

            let width = window.innerWidth;
            let height = window.innerHeight;
            // const body = document.body;

            const elButton = document.querySelector(".treat-button");
            const elWrapper = document.querySelector(".treat-wrapper");

            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            const treatmojis = ["<img src='./img/circle.png'>", "<img src='./img/wave.png'>", "<img src='./img/circle-red.png'>", "<img src='./img/triangle.png'>", ];
            const treats = [];
            const radius = 15;

            const Cd = 0.47; // Dimensionless
            const rho = 1.0; // kg / m^3
            const A = Math.PI * radius * radius / 5000; // m^2
            const ag = 3.81; // m / s^2
            const frameRate = 1 / 60;

            function createTreat() /* create a treat */{
                const vx = getRandomArbitrary(-10, 10); // x velocity
                const vy = getRandomArbitrary(-10, 1); // y velocity

                const el = document.createElement("div");
                el.className = "treat";

                const inner = document.createElement("span");
                inner.className = "inner";
                inner.innerHTML = treatmojis[getRandomInt(0, treatmojis.length - 1)];
                el.appendChild(inner);

                elWrapper.appendChild(el);

                const rect = el.getBoundingClientRect();

                const lifetime = getRandomArbitrary(1500, 3000);

                el.style.setProperty("--lifetime", lifetime);

                const treat = {
                    el,
                    absolutePosition: { x: rect.left, y: rect.top },
                    position: { x: rect.left, y: rect.top },
                    velocity: { x: vx, y: vy },
                    mass: 0.09, //kg
                    radius: el.offsetWidth, // 1px = 1cm
                    restitution: -.7,

                    lifetime,
                    direction: vx > 0 ? 1 : -1,

                    animating: true,

                    remove() {
                        this.animating = false;
                        this.el.parentNode.removeChild(this.el);
                    },

                    animate() {
                        const treat = this;
                        let Fx =
                            -0.5 *
                            Cd *
                            A *
                            rho *
                            treat.velocity.x *
                            treat.velocity.x *
                            treat.velocity.x /
                            Math.abs(treat.velocity.x);
                        let Fy =
                            -0.5 *
                            Cd *
                            A *
                            rho *
                            treat.velocity.y *
                            treat.velocity.y *
                            treat.velocity.y /
                            Math.abs(treat.velocity.y);

                        Fx = isNaN(Fx) ? 0 : Fx;
                        Fy = isNaN(Fy) ? 0 : Fy;

                        // Calculate acceleration ( F = ma )
                        var ax = Fx / treat.mass;
                        var ay = ag + Fy / treat.mass;

                        // Integrate to get velocity
                        treat.velocity.x += ax * frameRate;
                        treat.velocity.y += ay * frameRate;

                        // Integrate to get position
                        treat.position.x += treat.velocity.x * frameRate * 100;
                        treat.position.y += treat.velocity.y * frameRate * 100;

                        treat.checkBounds();
                        treat.update();
                    },

                    checkBounds() {

                        if (treat.position.y > height - treat.radius) {
                            treat.velocity.y *= treat.restitution;
                            treat.position.y = height - treat.radius;
                        }
                        if (treat.position.x > width - treat.radius) {
                            treat.velocity.x *= treat.restitution;
                            treat.position.x = width - treat.radius;
                            treat.direction = -1;
                        }
                        if (treat.position.x < treat.radius) {
                            treat.velocity.x *= treat.restitution;
                            treat.position.x = treat.radius;
                            treat.direction = 1;
                        }

                    },

                    update() {
                        const relX = this.position.x - this.absolutePosition.x;
                        const relY = this.position.y - this.absolutePosition.y;

                        this.el.style.setProperty("--x", relX);
                        this.el.style.setProperty("--y", relY);
                        this.el.style.setProperty("--direction", this.direction);
                    } };


                setTimeout(() => {
                    treat.remove();
                }, lifetime);

                return treat;
            }


            function animationLoop() {
                var i = treats.length;
                while (i--) {
                    treats[i].animate();

                    if (!treats[i].animating) {
                        treats.splice(i, 1);
                    }
                }

                requestAnimationFrame(animationLoop);
            }

            animationLoop();

            function addTreats() {
                //cancelAnimationFrame(frame);
                // if (treats.length > 40) {
                //   return;
                // }
                for (let i = 0; i < 40; i++) {
                    treats.push(createTreat());
                }
            }

            elButton.addEventListener("click", addTreats);
            elButton.click();

            window.addEventListener("resize", () => {
                width = window.innerWidth;
                height = window.innerHeight;
            });
        }
    }
}
</script>
<style lang="scss">
    .poppuri {
        padding: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;

        /*.make-it-rain {*/
        /*    padding: 20px 35px;*/
        /*    background-color: #4c6d95;*/
        /*    color: white;*/
        /*    font-family: "PressStart", serif;*/
        /*    border-radius: 26px;*/
        /*    font-size: 40px;*/
        /*    line-height: 1.5;*/
        /*    transition: all 300ms ease-in;*/
        /*    border: 6px double #ffd99d;*/
        /*    outline: none;*/
        /*    appearance: none;*/
        /*    overflow: hidden;*/
        /*    user-select: none;*/
        /*    cursor: pointer;*/
        /*    z-index: 1;*/
        /*    box-shadow: 0 0 1em rgba(white, .2);*/

        /*    &:hover {*/
        /*        background-color: rgba(#4c6d95, 0.7);*/
        /*        cursor: pointer;*/
        /*    }*/

        /*    &:focus {*/
        /*        outline: none;*/
        /*    }*/
        /*}*/

        @import url('https://fonts.googleapis.com/css?family=Fascinate+Inline&display=swap');

        html, body {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        * {
            box-sizing: border-box;
            position: relative;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #14192c;
        }

        .treat-button {
            font-family: 'Fascinate Inline', cursive;
            font-size: 4vmin;
            appearance: none;
            background: linear-gradient(to bottom, #f46001, #e14802);
            border: none;
            color: #ffffff;
            border-radius: 2em;
            padding: .6em 1.5em;
            overflow: hidden;
            user-select: none;
            cursor: pointer;
            z-index: 1;
            box-shadow: 0 0 1em rgba(white, .2);
            transition: transform .1s cubic-bezier(.5, 0, .5, 1),
            box-shadow .2s;

            &:hover {
                box-shadow: 0 0 2em rgba(white, .3);
            }

            outline: none;

            &:active {
                transform: scale(0.8) translateY(10%);
                transition-timing-function: cubic-bezier(.5, 0, .5, 1);
            }
        }

        .treat {
            --scale-x: 0;
            --scale-y: 0;
            pointer-events: none;
            display: block;
            position: absolute;
            top: 0;
            left: calc(50% - .5rem);
            border-radius: 50%;
            width: 1em;
            height: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 5vmin;
            transform: translate(
                    calc(var(--x) * 1px),
                    calc(var(--y) * 1px)
            ) translate(-50%, -50%);
            pointer-events: none;
            animation: treat-enter .1s ease-in backwards,
            treat-exit 300ms linear calc((var(--lifetime, 3000) * 1ms) - 300ms) forwards;

            @keyframes treat-enter {
                from {
                    opacity: 0;
                }
            }
            @keyframes treat-exit {
                to {
                    opacity: 0;
                }
            }

            .inner {
                animation: inner-rotate 1.6s linear infinite;
                transform: rotate(
                        calc(-1turn * var(--direction))
                );
                @keyframes inner-rotate {
                    to {
                        transform: none;
                    }
                }
            }
        }
    }

</style>
