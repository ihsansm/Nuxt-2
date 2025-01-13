<template>
    <div class="header-child">
  
      <header class="header">
        <nav class="nav-header">
          <NuxtLink to="/HomeDashboard">Home</NuxtLink>
          <NuxtLink to="/AboutDashboard">About</NuxtLink>
        </nav>
      </header>
  
      <main>
        <slot />
      </main>
    </div>
  </template>
  