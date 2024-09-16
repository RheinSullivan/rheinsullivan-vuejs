<script setup>
const projectCard = [
  {
    id: 1,
    title: "Website Portofolio (Reactjs)",
    desc: "Projek website Frontend yang dibuat menggunakan Framework Vite.js, React.js, dan Tailwindcss. Untuk tugas individu pada saat kegiatan KKN.",
    img1: "1.png",
    img2: "React.png",
    link1: "https://rheinsullivan.my.id/",
    link2: "https://rheinsullivan.my.id/notfoundpage",
  },
  {
    id: 1,
    title: "Website Portofolio (Vuejs)",
    desc: "Projek website Frontend yang dibuat menggunakan Framework Vite.js, React.js, dan Tailwindcss. Untuk tugas individu pada saat kegiatan KKN.",
    img1: "2.png",
    img2: "Vue.png",
    link1: "https://desa-karangwuni.vercel.app/",
    link2: "https://github.com/RheinSullivan/rheinsullivan-vuejs",
  },
  {
    id: 1,
    title: "Website Wisata Setu Sedong",
    desc: "Projek website Frontend yang dibuat menggunakan Framework Vite.js, React.js, dan Tailwindcss. Untuk tugas individu pada saat kegiatan KKN.",
    img1: "3.png",
    img2: "React.png",
    link1: "https://desa-karangwuni.vercel.app/",
    link2: "https://rheinsullivan.my.id/notfoundpage",
  },
  {
    id: 2,
    title: "Website Gabut + Ngelantur",
    desc: "Ketika saya gabut, dan ngerasa bosen. Jadi saya memutuskan untuk membuat website portofolio namun untuk jasa service smartphone, thanks for Marvell Cell :v",
    img1: "6.png",
    img2: "Tailwindcss6.png",
    link1: "https://awkoawkoa-gw-gabut.vercel.app/",
    link2: "https://github.com/RheinSullivan/gabut-bersama",
  },
  {
    id: 3,
    title: "Website Sederhana Universitas",
    desc: "Projek website ini saya buat untuk tugas pada mata kuliah Pemrograman Website, dengan ketentuan mockup yang sudah diberikan oleh dosen mata kuliah tersebut.",
    img1: "4.png",
    img2: "bootstrap.png",
    link1: "https://umc-rheinsullivan.vercel.app/",
    link2: "https://github.com/RheinSullivan/umc-rheinsullivan",
  },
  {
    id: 4,
    title: "Portofolio Kelompok 37: Karangwuni",
    desc: "Website ini saya buat yang tadinya untuk sebagai kenang-kenangan, hanya saja saya belum menambahkan dokumentasi saat kegiatan KKN.",
    img1: "5.png",
    img2: "bootstrap.png",
    link1: "https://kelompok37karangwuni.vercel.app/",
    link2: "https://github.com/RheinSullivan/kkm37karangwuni",
  },
];
</script>

<template>
  <section id="started">
    <div class="container py-20 text-white">
      <div class="space-y-2 text-center max-w-[500px] mx-auto mb-16">
        <h1 class="text-4xl font-bold pb-3 text-red">Project <span class="text-white">Saya</span></h1>
        <p class="text-sm">Inilah beberapa projek website yang saya buat, ya seperti itulah...</p>
      </div>
      <div class="grid grid-cols-1 gap-5 my-5 -mx-3 lg:-mx-20 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="card in projectCard" :key="card.id" class="relative space-y-4 bg-gray-300 m-2 rounded-xl text-black duration-300 hover:shadow-[7px_7px_0px_0px_#4b5563]">
          <img :src="`/src/assets/ImageProject/${card.img1}`" class="cursor-pointer rounded-t-xl object-cover bg-cover" alt="" />
          <div class="w-full h-0 -top-2 left-2 mt-8 absolute">
            <img :src="`/src/assets/image/${card.img2}`" alt="Project Image" class="inset-0 w-auto h-[40px] object-contain" />
          </div>
          <div class="px-4 pb-5">
            <h1 class="text-2xl mb-3 font-bold">{{ card.title }}</h1>
            <p class="text-sm mb-4">{{ card.desc }}</p>
            <a :href="card.link1" class="inline-block border-b-[1px] hover:text-black hover:border-red border-black text-red mr-5">Live Demo</a>
            <a :href="card.link2" class="inline-block border-b-[1px] hover:text-red hover:border-black border-red text-black">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
