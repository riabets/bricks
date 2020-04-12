<template>
    <nav class="navigation">
        <a href="/" class="navigation__item">Home</a>
        <a href="/paint-bricks" class="navigation__item">
            <img src="./../assets/wall.png" alt="">
            Paint bricks
        </a>
        <a href="/smash-bricks" class="navigation__item">
            <img src="./../assets/baseball.png" alt="">
            Smash bricks
        </a>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>
<style lang="scss">
    .navigation {
        position: fixed;
        width: 86px;
        height: 100%;
        left: 0;
        bottom: 0;
        top: 0;
        background-color: #ffd99d;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        &__item {
            padding: 10px;
            margin-bottom: 20px;
            text-align: center;
            color: #4c6d95;
            text-decoration: none;
            font-weight: bold;

            &:first-child {
                margin-top: 30px;
            }

            img {
                width: 45px;
                height: 45px;
            }
        }
    }
</style>
