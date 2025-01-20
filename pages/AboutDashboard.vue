<template>
    <div class="">
        <h1>Ini About</h1>

        <button @click="enableLayout()">Blog Layout</button>
        <br />
        <br />
        <button @click="resetLayout()">Reset Layout</button>
    </div>
</template>

<script setup>

function enableLayout(params) {
    setPageLayout('blog') 
}

function resetLayout(params) {
    setPageLayout('default')
}
</script>

<style>

</style>