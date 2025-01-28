<template>
    <div class="default-layout">
        <header class="header">
            <div>
                <LayoutNavbar />
            </div>
        </header>

        <hr>
        
        <main class="main-content">
            <slot />
        </main>
        
        <hr>

        <footer class="footer-content">
            <LayoutFooter />
        </footer>
    </div>
</template>

<style>


.main-content{
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}
</style>