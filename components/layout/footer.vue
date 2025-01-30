<template>
  <div class="footer">
    <footer class="footer-content">
      <div class="social-media-content">
        <!-- <p>||||||||||||||||</p> -->
        <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1" class="social-media-content-link">
          <img
            src="/assets/instagram.png"
            alt="Instagram"
            class="social-media-content-link"
            style="width: 24px; height: 24px"
          />
        </a>
        <a href="https://x.com/" class="social-media-content-link">
          <img
            src="/assets/twitter.png"
            alt="Instagram"
            class="social-media-content-link"
            style="width: 24px; height: 24px"
          />
        </a>
        <a href="https://www.youtube.com/" class="social-media-content-link">
          <img
            src="/assets/youtube.png"
            alt="Instagram"
            class="social-media-content-link"
            style="width: 24px; height: 24px"
          />
        </a>
        <a href="https://www.facebook.com/" class="social-media-content-link">
          <img
            src="/assets/facebook.png"
            alt="Instagram"
            class="social-media-content-link"
            style="width: 24px; height: 24px"
          />
        </a>
      </div>

      <div class="footer-text">
        <div class="footer-service">
          <ul>
            <li class="nlink">
              <a href="/Maintenance">Home</a>
            </li>
            <li class="nlink">
              <a href="/AboutDashboard">About us</a>
            </li>
            <li class="nlink">
              <a href="/ContactUsDashboard">Contact Us</a>
            </li>
            <li class="nlink">
              <a href="/Maintenance">Privacy Policy(maintenance)</a>
            </li>
            <li class="nlink">
              <a href="/maintenance">Terms of Service(maintenance)</a>
            </li>
          </ul>
        </div>

        <div class="footer-copyright">
          <p>
            Nuxt Copyright © 2025 All rights reserved || Designed By: Icanxx
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: white;
  text-decoration: none;
}

.nlink {
  margin: 0 1rem;
  text-decoration: none;
  padding: 5px 0;
  font-size: small;
}

.nav-link:hover {
  color: #cacaca;
}

.footer-service {
  padding: 50px 0 50px;
}

.footer-service a {
  text-decoration: none;
  margin: 0 1rem;
  font-size: small;
  letter-spacing: 1px;
  border-radius: 5px; 
}

.footer-service a:hover {
  color: #cacaca;
  
}

.social-media-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-media-content-link {

    
}

.social-media-content-link:hover {
    transform: scale(1.2);
}

.footer-text li, p{
  font-size: small;
  color: #cacaca;
}
</style>
