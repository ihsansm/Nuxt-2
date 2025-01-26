<template>
    <div class="default-layout">
        <header class="header-content">
            <div>
                <LayoutNavbar />
            </div>
        </header>
        
        <main class="main-content">
            <slot />
        </main>

        <footer class="footer-content">
            <LayoutFooter />
        </footer>
    </div>
</template>

<style>
.header-content{
    margin-bottom: 10rem;
}

.main-content{
    margin-top: 10rem;
    margin-bottom: 10rem;
}
</style>