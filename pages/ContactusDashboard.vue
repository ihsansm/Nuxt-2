<template>
    <div class="contactUs">
        <h1>ini Contact Us</h1>
        <button @click="telpon">TELP</button>
        <p v-if="showPhone">{{ phone }}</p>
    </div>
</template>

<script>
definePageMeta({
        layout: 'default',
    })
export default {
    data() {
        return {
            phone: '08123456789',
            showPhone: false
        }
    },
    methods: {
        telpon() {
            this.showPhone = true;
        }
    }
}
</script>

<style>
.contactUs{
    display: grid;
    place-items: center;
    grid-template-rows: auto;
    color: white;
    text-decoration: none;
}
</style>