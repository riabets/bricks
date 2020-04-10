<template>
    <main>
        <header>
            <div
                class="colours"
                v-for="(item, index) in colours"
                v-bind:key="`colors-setting-${index}`"
                v-bind:style="{ color: item.color === 'white' ? 'black' : item.hex }"
                v-on:click="chooseColour(item.hex)"
            >
                {{item.color}}
            </div>
            <div
                class="grids"
                v-for="(item, index) in grids"
                v-bind:key="`grids-setting-${index}`"
                v-on:click="chooseGrid(item.number)"
            >
                {{item.number}}
            </div>
        </header>
        <div class="bricks">
            <div
                class="brick"
                v-for="(item, index) in bricks"
                v-bind:key="`bricks-${index}`"
                v-bind:style="{ backgroundColor: item.color }"
                v-on:click="hoverItems(index)"
            ></div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Field",
    data() {
        return {
            bricks: [],
            activeColor: '#03a9f4',
            colours: [
                {
                    id: 1,
                    color: 'black',
                    hex: '#000000',
                },
                {
                    id: 2,
                    color: 'red',
                    hex: '#f44336',
                },
                {
                    id: 3,
                    color: 'green',
                    hex: '#4caf50',
                },
                {
                    id: 4,
                    color: 'white',
                    hex: '#ffffff',
                },
                {
                    id: 5,
                    color: 'yellowgreen',
                    hex: '#9acd32',
                },
                {
                    id: 6,
                    color: 'yellow',
                    hex: '#ffeb3b',
                },
                {
                    id: 7,
                    color: 'blue',
                    hex: '#03a9f4',
                }
            ],
            activeGrid: 100,
            grids: [
                {
                    id: 1,
                    number: 10,
                },
                {
                    id: 2,
                    number: 50,
                },
                {
                    id: 3,
                    number: 100,
                },
                {
                    id: 4,
                    number: 200,
                },
                {
                    id: 5,
                    number: 300,
                },
                {
                    id: 6,
                    number: 400,
                },
            ]
        }
    },
    created() {
        this.generateBricks(this.activeGrid);
    },
    methods: {
        generateBricks(number) {
            this.bricks = [];
            for (let i = 0; i < number; i++) {
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
        },
        chooseGrid(number) {
            this.activeGrid = number;
            this.generateBricks(number);
        }
    }
}
</script>
<style lang="scss">
    .bricks {
        width: 100%;
        background-color: yellowgreen;
        padding: 50px;
        display: flex;
        flex-wrap: wrap;

        .brick {
            width: 75px;
            height: 75px;
            display: inline-flex;

            &:hover {
                cursor: url('../assets/brush.png'), auto;
                &:before {
                    content: '';
                    display: inline-block;
                    width: 75px;
                    height: 75px;
                    border: 1px solid #eee;
                    box-sizing: border-box;
                }
            }
        }
    }

    header {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
        padding-top: 20px;

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

        .grids {
            background-color: white;
            padding: 10px 20px;
            border: 1px solid white;
            border-radius: 4px;
            margin-right: 20px;
            font-weight: bold;
            font-family: Arial, sans-serif;
        }
    }
</style>