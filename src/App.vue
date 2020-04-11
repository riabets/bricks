<template>
    <div id="app">
<!--        <field></field>-->
<!--        <hr>-->
        <matrix></matrix>
    </div>
</template>

<script>
// import Field from "@/components/Field";
import Matrix from "@/components/Matrix";

export default {
    name: 'App',
    components: {
        // 'field': Field,
        'matrix': Matrix,
    }
}
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: yellowgreen;
    }
</style>
