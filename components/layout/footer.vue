<template>
    <div class="footer">
        <footer class="footer-content">
            <div class="social-media-content">
                <!-- <p>||||||||||||||||</p> -->
                <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1">
                    <img src="/assets/instagram.png" alt="Instagram" class="social-media-content-link" style="width: 24px; height: 24px;" />
                </a>
                <a href="https://x.com/" class="social-media-content-link">
                    <img src="/assets/twitter.png" alt="Instagram" class="social-media-content-link" style="width: 24px; height: 24px;" />
                </a>
                <a href="https://www.youtube.com/" class="social-media-content-link">
                    <img src="/assets/youtube.png" alt="Instagram" class="social-media-content-link" style="width: 24px; height: 24px;" />
                </a>
                <a href="https://www.facebook.com/" class="social-media-content-link">
                    <img src="/assets/facebook.png" alt="Instagram" class="social-media-content-link" style="width: 24px; height: 24px;" />
                </a>
            </div>

            <div class="footer-service">
                <ul>
                    <li>
                        <NuxtLink to="/AboutDashboard" class="nav-link">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/ContactusDashboard" class="nav-link">Contact us</NuxtLink>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                </ul>
            </div>

            <div class="footer-copyright">
                <p>Nuxt Copyright © 2021 All rights reserved || Designed By: Icanxx</p>
            </div>
        </footer>
    </div>
</template>

<style>
.footer-content{
    display: grid;
    place-items: center;
    padding: 1rem;
    color: white;
    text-decoration: none;
}

.nav-link{
    margin: 0 1rem;
    text-decoration: none;
}

.social-media-content-link{
    padding: 1rem;
}
</style>