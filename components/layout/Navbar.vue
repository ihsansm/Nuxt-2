<template>
    <div class="navbar">
        <div class="nav-content">
            <nav>
                <NuxtLink to="/HomeDashboard" class="nav-link" >Home</NuxtLink>
                <NuxtLink to="/AboutDashboard" class="nav-link">About</NuxtLink>
                <NuxtLink to="/ContactusDashboard" class="nav-link">Contact us</NuxtLink>
                <!-- <p>|||||||||||||||||||</p> -->
            </nav>
        </div>
    </div>
</template>

<style>
.nav-content{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: white;
    text-decoration: none;
}

.nav-link{
    margin: 0 1rem;
    text-decoration: none;
}
</style>