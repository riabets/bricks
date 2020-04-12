<template>
    <div id="app">
        <navigation></navigation>
        <div v-if="$route.name === 'home'">Home</div>
        <paint-bricks v-if="$route.name === 'paint-bricks'"></paint-bricks>
        <smash-bricks v-if="$route.name === 'smash-bricks'"></smash-bricks>
        <poppuri v-if="$route.name === 'poppuri'"></poppuri>
    </div>
</template>

<script>
import PaintBricks from "@/components/PaintBricks";
import SmashBricks from "@/components/SmashBricks";
import Poppuri from "@/components/Poppuri";
import Nav from "@/components/Nav";

export default {
    name: 'App',
    components: {
        'paint-bricks': PaintBricks,
        'smash-bricks': SmashBricks,
        'poppuri': Poppuri,
        'navigation': Nav,
    },
}
</script>

<style lang="scss">
    @font-face {
        font-family: "PressStart";
        src: url("~@/assets/font/PressStart2P-Regular.ttf") format("truetype");
    }

    @font-face {
        font-family: "Varela";
        src: url("~@/assets/font/VarelaRound-Regular.ttf") format("truetype");
    }

    @mixin fancy {
        font-family: "PressStart", serif;
    }

    @mixin primary {
        font-family: "Varela", sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    body {
        @include primary;
        margin: 0;
        background-color: #A0D5C7;
        position: relative;
        padding-left: 85px;
        min-height: 100vh;
    }
    #app {
        min-height: 100vh;
    }
</style>
