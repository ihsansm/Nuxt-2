<template>
    <div class="default-layout">
        <header>
            <nav>
                <NuxtLink to="/home">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </nav>
        </header>
        
        <main>
            <slot />
        </main>

        <footer>
            <p>Footer content</p>
        </footer>
    </div>
</template>