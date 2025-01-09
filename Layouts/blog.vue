<template>
    <div class="blog">
        <header class="blog-header">
            <h1>Blog</h1>
            <nav>
                <nuxt-link to="/blog">Home</nuxt-link>
                <nuxt-link to="/blog/article">Articles</nuxt-link>
            </nav>
        </header>

        <div class="blog-container">
            <main class="blog-content">
                <slot/>
            </main>
            
            <aside class="blog-sidebar">
                <h3>Categories</h3>
                <ul>
                    <li> <nuxt-link to="/blog/category/tech" >Tech</nuxt-link></li>
                    <li> <nuxt-link to="/blog/category/learning">Learning</nuxt-link></li>
                    <li> <nuxt-link to="/blog/category/design"> Design</nuxt-link></li>
                </ul>
            </aside>
        </div>

        <footer class="blog-footer">
            <div class="social-links">
                <a href="#"></a>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </div>
        </footer>
    </div>

</template>