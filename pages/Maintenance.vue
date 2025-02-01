
<template>
    <div class="main-content">
        

        <h1>Notes</h1>
    <br>
        <NotesNewNote/>
    <br>
    <br>

    
    <NotesNoteCard/>
    <br>
    <br>
    <NotesNoteCard/>
    <br>
    <br>
    <NotesCounterCard/>    

    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'default',
    })

    const { count, increment, decrement } = useCounter()
    
    const noteCard=resolveComponent('NotesNoteCard')
    const newNote=resolveComponent('NotesNewNote')
    
    const boolean=ref(false)
</script>

<style>

.main-content{
    display: grid;
    place-items: center;
    grid-template-rows: auto;
    padding: 1rem;
    color: white;
    text-decoration: none;
}


</style>