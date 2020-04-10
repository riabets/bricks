<template>
    <main>
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
            bricks: []
        }
    },
    created(){
      this.generateBricks();
    },
    methods: {
        generateBricks() {
            for (let i = 0; i < 10; i++) {
                let item = {
                    id: i,
                    color: "white",
                };
                this.bricks.push(item);
            }
        },
        hoverItems(index){
            this.bricks[index].color = 'green';
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
            width: 50px;
            height: 50px;
            background-color: yellow;
            border: 2px solid yellowgreen;
            display: inline-block;
            &:hover {
                cursor: url('../assets/brush.svg'), auto;
            }
        }
    }
</style>