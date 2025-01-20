<script setup lang="ts">
import NoteCard from '~/components/NoteCard.vue';

</script>

<template>
    <h1>Notes</h1>
    <div class="flex">
        <NoteCard />
        <NoteCard />
    </div>
</template>

<style>
.flex{
    display: flex;
}

</style>