<script setup>
import Navbar from "./pages/Navbar.vue";
import Framework from "./pages/Framework.vue";
import About from "./pages/About.vue";
import Project from "./pages/Project.vue";
import Quotes from "./pages/Quotes.vue";
import Khodam from "./pages/Khodam.vue";
import Footer from "./pages/Footer.vue";
</script>

<template>
  <div class="container overflow-x-hidden">
    <Navbar />
    <router-view />
    <Framework />
    <About />
    <Project />
    <Quotes />
    <Khodam />
    <Footer />
  </div>
</template>
