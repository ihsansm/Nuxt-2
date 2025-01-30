<template>
    <div class="home-dashboard">
        <div class="home-header">
            <h1>ini Home</h1>
        </div>
        <div class="home-content">
            <button @click="">Blog Layout</button>
            <button>Reset Layout</button>
        </div>

        <div class="home-content">
            <p>Angka: {{ count }}</p>
            <button @click="increment">Tambah</button>
            <button @click="decrement">Kurang</button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
        layout: 'default',
    })
const { count, increment, decrement } = useCounter()
</script>

<style>
.home-dashboard{
    display: grid;
    place-items: center;
    grid-template-rows: auto;
    color: white;
    text-decoration: none;
}

.home-header{
    padding: 0 0 10em ;
}
</style>