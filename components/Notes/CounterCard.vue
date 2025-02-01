<template>
    <div class="card">
        <div class="home-content">
            <p>Angka: {{ count }}</p>
            <div>
                <img src="/assets/coin-svgrepo-com.svg" alt="Description of image" class="small-image">
                <button @click="increment">Tambah</button>
            </div>
            <div>
                <img src="/assets/coin-svgrepo-com.svg" alt="Description of image" class="small-image">
                <button @click="decrement">Kurang</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { count, increment, decrement } = useCounter()
</script>

<style>
.card {
    max-width: 50%;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.small-image {
    width: 25px;
}

.card h1 {
   padding: 10px;
   border-bottom: 1px solid black;
}

.card p {
    padding: 10px;
}
</style>
<style>
.card {
    max-width: 50%;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.card-image {
    width: 100%;
    border-bottom: 1px solid black;
    border-radius: 8px;
}

.card h1 {
   padding: 10px;
   border-bottom: 1px solid black;
}

.card p {
    padding: 10px;
}
</style>