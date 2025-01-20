<template>
    <div>
        <h1>ini Contact Us</h1>
        <button @click="telpon">TELP</button>
        <p v-if="showPhone">{{ phone }}</p>
    </div>
</template>

<script>
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