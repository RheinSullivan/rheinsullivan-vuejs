<script setup>
import Navbar from "./landingpage/Navbar.vue";
import Framework from "./landingpage/Framework.vue";
import About from "./landingpage/About.vue";
import Project from "./landingpage/Project.vue";
</script>

<template>
  <div class="container overflow-x-hidden">
    <Navbar />
    <router-view />
    <Framework />
    <About />
    <Project />
  </div>
</template>
