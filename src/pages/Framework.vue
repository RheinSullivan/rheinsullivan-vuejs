<script setup>
// Image Component
import { ref, onMounted, onUnmounted } from "vue";
import htmlImg from "../assets/image/HTML.png";
import cssImg from "../assets/image/css-uwu.png";
import tailwindImg from "../assets/image/Tailwindcss6.png";
import viteImg from "../assets/image/logo-uwu.png";
import githubImg from "../assets/image/GitHub.png";
import vueImg from "../assets/image/Vue.png";
import vercelImg from "../assets/image/vercel.png";
import windows11Img from "../assets/image/Windows11.png";

// Data Image
const originalImages = [
  { src: htmlImg, alt: "HTML UwU" },
  { src: cssImg, alt: "CSS UwU" },
  { src: vueImg, alt: "VueJS UwU" },
  { src: viteImg, alt: "ViteJS UwU" },
  { src: tailwindImg, alt: "Tailwindcss UwU" },
  { src: githubImg, alt: "Github UwU" },
  { src: vercelImg, alt: "Vercel UwU" },
  { src: windows11Img, alt: "Windows 11 UwU" },
];

// Animastion
const images = [...originalImages, ...originalImages];

const currentPosition = ref(0);
const slidesPerView = ref(1);
const spaceBetween = ref(10);

const updateBreakpoints = () => {
  const width = window.innerWidth;

  if (width < 360) {
    slidesPerView.value = 2;
    spaceBetween.value = 10;
  } else if (width < 520) {
    slidesPerView.value = 3;
    spaceBetween.value = 10;
  } else if (width < 950) {
    slidesPerView.value = 4;
    spaceBetween.value = 10;
  } else {
    slidesPerView.value = 5;
    spaceBetween.value = 10;
  }
};

onMounted(() => {
  updateBreakpoints();
  window.addEventListener("resize", updateBreakpoints);

  const interval = setInterval(() => {
    currentPosition.value += 1;
    if (currentPosition.value >= originalImages.length) {
      currentPosition.value = 0;
    }
  }, 2000);

  onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener("resize", updateBreakpoints);
  });
});
</script>

<template>
  <div class="container py-8">
    <div class="relative w-full overflow-hidden flex justify-center items-center lg:-mx-10">
      <!-- Images -->
      <div
        class="flex transition-transform duration-1000 ease-in-out"
        :style="{
          transform: `translateX(-${currentPosition * (100 / slidesPerView)}%)`,
          gap: `${spaceBetween}px`,
        }"
      >
        <div v-for="(image, index) in images" :key="index" :style="{ minWidth: `${100 / slidesPerView}%` }" class="flex justify-center items-center">
          <img :src="image.src" :alt="image.alt" class="w-[90px] md:w-[150px] h-auto hover:scale-110 py-5 px-2 mx-3" />
        </div>
      </div>
    </div>
  </div>
</template>
