<template>
    <main>
        <header>
            <div
                class="colours"
                v-for="(item, index) in colours"
                v-bind:key="index"
                v-bind:style="{ color: item.color === 'white' ? 'black' : item.color }"
                v-on:click="chooseColour(item.color)"
            >
                {{item.color}}
            </div>
        </header>
        <div
            class="brick"
            v-for="(item, index) in bricks"
            v-bind:key="index"
            v-bind:style="{ backgroundColor: item.color }"
            v-on:click="hoverItems(index)"
        ></div>
    </main>
</template>

<script>
export default {
    name: "Field",
    data() {
        return {
            bricks: [],
            activeColor: 'yellowgreen',
            colours: [
                {
                    id: 1,
                    color: 'black',
                },
                {
                    id: 2,
                    color: 'red',
                },
                {
                    id: 3,
                    color: 'green',
                },
                {
                    id: 4,
                    color: 'white',
                },
                {
                    id: 5,
                    color: 'yellowgreen',
                }
            ]
        }
    },
    created() {
        this.generateBricks();
    },
    methods: {
        generateBricks() {
            for (let i = 0; i < 200; i++) {
                let item = {
                    id: i,
                    color: 'white',
                };
                this.bricks.push(item);
            }
        },
        hoverItems(index) {
            this.bricks[index].color = this.activeColor;
        },
        chooseColour(color) {
            this.activeColor = color;
        }
    }
}
</script>
<style lang="scss">
    main {
        min-height: 100vh;
        width: 100%;
        background-color: yellowgreen;
        padding: 50px;
        display: block;

        .brick {
            width: 75px;
            height: 75px;
            border: 2px solid yellowgreen;
            display: inline-block;

            &:hover {
                cursor: url('../assets/brush.png'), auto;
            }
        }

        header {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 50px;

            .colours {
                background-color: white;
                padding: 10px 20px;
                border: 1px solid white;
                border-radius: 4px;
                margin-right: 20px;
                text-transform: capitalize;
                font-weight: bold;
                font-family: Arial, sans-serif;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>