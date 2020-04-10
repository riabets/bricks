<template>
    <div id="app">
        <field></field>
    </div>
</template>

<script>
import Field from "@/components/Field";

export default {
    name: 'App',
    components: {
        'field': Field
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
