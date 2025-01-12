<template>
    <div class=" bg-blue-500 text-white">
    Hello, Tailwind CSS!
  </div>
    <div class="default-layout">
        <header>
            <nav>
                <NuxtLink to="/HomeDashboard" >Home</NuxtLink>
                <NuxtLink to="/AboutDashboard">About</NuxtLink>
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