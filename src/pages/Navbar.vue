<script setup>
import { onMounted, ref } from "vue";

const navbar = ref("");
const showNavbar = ref(false);
const activeSection = ref("home");

onMounted(() => {
  navbar.value = document.querySelector("nav");

  window.onscroll = () => {
    if (window.scrollY === 0) {
      navbar.value.classList.remove("bg-dark/90");
    } else {
      navbar.value.classList.add("bg-dark/90");
    }

    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection.value = section.getAttribute("id");
      }
    });
  };
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-dark backdrop-blur-sm z-20 transition py-1 duration-300 px-2 lg:px-[120px]" ref="navbar">
    <div class="container flex justify-between items-center h-20">
      <!-- Logo & Title -->
      <div class="relative z-30 flex items-center gap-2 mb-2 md:pb-2 lg:mb-0">
        <img src="../assets/rhein-tab.png" alt="Rhein Sullivan Logo" class="w-16 lg:w-[60px]" />
        <h1 class="font-medium text-white text-xs hidden lg:block">
          <span class="font-bold text-lg text-red italic lg:text-2xl">Rhein Sullivan</span><br class="text-white" />
          Frontend Developer
        </h1>
      </div>
      <!-- Button Mobile -->
      <div class="flex items-center gap-2 lg:hidden">
        <a
          href="https://vuejs.org/"
          class="relative z-30 px-3 py-2 -mt-1.5 text-sm text-white font-medium bg-red shadow-[5px_5px_0px_0px_#fff] hover:shadow-[5px_5px_0px_0px_#ff0000] duration-300 w-full tracking-wider lg:w-auto hover:text-red hover:bg-white"
          >Contact Me</a
        >
        <button class="relative z-30 text-white hover:text-red -mt-2 p-2 pl-4" @click="showNavbar = !showNavbar">
          <svg width="20" height="20" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
              class="fill-current"
            />
          </svg>
        </button>
      </div>
      <!-- Navbar Section -->
      <div
        class="absolute bg-dark/90 lg:bg-transparent flex flex-col items-start text-start top-[88px] md:-mt-2 inset-x-0 gap-5 py-7 px-5 ml-48 md:ml-0 transition duration-500 lg:flex-row lg:static md:text-center md:py-0 md:px-3 lg:gap-10 lg:duration-200 lg:translate-y-[150]"
        :class="!showNavbar ? 'translate-x-[150%]' : '-translate-y-0'"
      >
        <a href="#home" class="text-white lg:pt-2 font-medium hover:border-b-2 hover:border-red" :class="activeSection === 'home' ? 'border-b-2 border-red' : ''" @click="showNavbar = false">Home</a>
        <a href="#about" class="text-white lg:pt-2 font-medium hover:border-b-2 hover:border-red" :class="activeSection === 'about' ? 'border-b-2 border-red' : ''" @click="showNavbar = false">About</a>
        <a href="#project" class="text-white lg:pt-2 font-medium hover:border-b-2 hover:border-red" :class="activeSection === 'project' ? 'border-b-2 border-red' : ''" @click="showNavbar = false">Project</a>
        <a href="#quotes" class="text-white lg:pt-2 font-medium hover:border-b-2 hover:border-red" :class="activeSection === 'quotes' ? 'border-b-2 border-red' : ''" @click="showNavbar = false">Quotes</a>
        <a
          href="https://rheinsullivan.my.id/"
          class="hidden md:block px-3 py-2 text-white font-medium tracking-wider shadow-[5px_5px_0px_0px_#fff] hover:shadow-[5px_5px_0px_0px_#ff0000] bg-red w-full duration-300 hover:text-red hover:bg-white ml-20 lg:w-auto"
          >Contact Me</a
        >
      </div>
    </div>
  </nav>
</template>
