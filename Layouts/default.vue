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
    margin-top: 5rem;
    margin-bottom: 10rem;
-bottom: 10rem;
}

hr {
    border: none;
    border-top: 2px solid rgb(39, 0, 148);
    width: 50%;
    margin: 0 auto;
}
</style>