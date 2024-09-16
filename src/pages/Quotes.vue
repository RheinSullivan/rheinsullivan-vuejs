<script setup>
const myQuotes = [
  {
    id: 1,
    img: "https://rheinsullivan.my.id/assets/rhein-about-E-nCyKwP.png",
    desc: 'Selalu berusaha untuk memperbaiki suatu hal atau masalah, jangan pernah untuk menyerah walaupun kata "Maaf" sudah tidak lagi berarti, walaupun dunia tidak berpihak kepadamu.',
    author: "Rhein Sullivan",
  },
  {
    id: 2,
    img: "https://rheinsullivan.my.id/assets/rhein-about-E-nCyKwP.png",
    desc: "Jika kamu masih bisa rasakan sakit pada dirimu, maka tandanya kamu masih hidup. Tetapi jika kamu bisa merasakan rasa sakit yang dirasakan orang lain, maka tandanya kau adalah manusia.",
    author: "Rhein Sullivan",
  },
  {
    id: 3,
    img: "https://rheinsullivan.my.id/assets/rhein-about-E-nCyKwP.png",
    desc: "Hidup ini sangat lah singkat, jika dirimu telah menemukan suatu kenyamanan, dan kebahagiaan, pertahankanlah dan jangan pernah melakukan seuatu kesalahan, hingga membuat kenyamanan dan kebahagiaan itu menjadi hampa, dan ahkirnya mulai menghilang.",
    author: "Rhein Sullivan",
  },
];
</script>

<template>
  <section class="flex flex-col items-center py-20 text-white md:-mx-32">
    <!-- Tittle -->
    <div class="space-y-4 text-center mx-auto mb-5">
      <h1 class="font-bold text-3xl md:text-4xl pb-3"><span class="text-red">My </span>Quotes</h1>
      <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sed?</p>
    </div>
    <!-- Content -->
    <div class="p-12">
      <div class="container grid grid-cols-1 gap-6 md:grid-cols-3">
        <div v-for="card in myQuotes" :key="card.id" class="py-5 px-5 rounded-lg text-white bg-gray-500">
          <div class="flex flex-row items-center gap-3">
            <img :src="card.img" alt="Author Image" class="w-12 rounded-full" />
            <div>
              <h1 class="font-bold italic">{{ card.author }}</h1>
              <p class="text-xs">Tidak tau</p>
            </div>
          </div>
          <div class="border-t-[1px] border-white pt-5 mt-5">
            <p class="text-[13px]">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
