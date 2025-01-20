<template>
    <div class="home-dashboard">
        <h1>ini Home</h1>
        <button @click="">Blog Layout</button>
        <button>Reset Layout</button>

        <p>Angka: {{ count }}</p>
        <button @click="increment">Tambah</button>
        <button @click="decrement">Kurang</button>
    </div>
</template>

<script setup>
const { count, increment, decrement } = useCounter()
</script>

<style>

</style>