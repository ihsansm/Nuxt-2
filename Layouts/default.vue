<template>
    <div class="default-layout">
        <header>
            <div>
                <LayoutNavbar />
            </div>
        </header>
        
        <main>
            <slot />
        </main>

        <footer>
            <LayoutFooter />
        </footer>
    </div>
</template>