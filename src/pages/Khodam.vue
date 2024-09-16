<script setup>
import { ref } from "vue";

const khodamData = [
  "Khodam Senyum Bahagia",
  "Khodam Geli Gelian",
  "Khodam Tidur Siang",
  "Khodam Ngopi Santai",
  "Khodam Jalan-Jalan",
  "Khodam Makan Kerupuk",
  "Khodam Santuy Aja",
  "Khodam Cemberut Manja",
  "Khodam Nasi Padang",
  "Khodam Si Lincah",
  "Khodam Ngakak Terus",
  "Khodam Main Layangan",
  "Khodam Paling Kece",
  "Khodam Kipas Angin",
  "Khodam Suka Mie Goreng",
  "Khodam Kentut Diam-Diam",
  "Khodam Jago Masak",
  "Khodam Jajan Cilok",
  "Khodam Pelihara Kucing",
  "Khodam Nyanyi Sumbang",
  "Khodam Tukang Curhat",
  "Khodam Tukang Tidur",
  "Khodam Ghibah Online",
  "Khodam Drama Queen",
  "Khodam Suka Selfie",
  "Khodam Pencinta Drama Korea",
  "Khodam Tukang Melawak",
  "Khodam Paling Hits",
  "Khodam Gaul Abis",
  "Khodam Pembawa Kue",
  "Khodam Main Gitar",
  "Khodam Seru Seruan",
  "Khodam Pecinta Ayam Geprek",
  "Khodam Penggemar Jajanan Pasar",
  "Khodam Tukang Ketawa",
];

const specialNames = {
  "Rhein Sullivan": "Zahra Rahayu Ratna Dewi 😘",
  "Zahra Rahayu Ratna Dewi": "Rhein Sullivan 😘",
};

const inputKhodam = ref("");
const hasilKhodammu = ref("");
const cheked = {};
const removeEmoji = (name) => name.replace(/[\u{1F600}-\u{1F64F}]/gu, "").trim();

function getRandomKhodam(khodamData) {
  const randomIndex = Math.floor(Math.random() * khodamData.length);
  return khodamData[randomIndex];
}

const handleClick = () => {
  let name = inputKhodam.value.trim();
  if (!name) {
    hasilKhodammu.value = "Tolong jangan main-main, cepat masukkan namamu :v";
    return;
  }

  const nameWithoutEmoji = removeEmoji(name);
  if (specialNames[nameWithoutEmoji]) {
    hasilKhodammu.value = `Khodam kamu adalah: ${specialNames[nameWithoutEmoji]}`;
  } else {
    if (!cheked[name]) {
      const khodamNew = getRandomKhodam(khodamData);
      cheked[name] = khodamNew;
    }
    hasilKhodammu.value = `Khodam kamu adalah: ${cheked[name]}`;
  }
};
</script>

<template>
  <section class="pt-20 pb-5" id="cekKhodam">
    <div class="relative pb-10 rounded-lg -mx-10 md:pb-32">
      <div class="p-10">
        <!-- Title -->
        <div class="flex items-center justify-between">
          <div class="w-1/2">
            <h2 class="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 mt-5 md:mt-0">Cek Khodam <span class="text-red">Kamu</span></h2>
            <p class="text-sm md:text-base text-white md:w-full">Jika kamu gabut, coba masukkan namamu di bawah, untuk mengecek khodam pada diri kamu</p>
          </div>
          <div class="block w-36 md:hidden">
            <img src="https://i.pinimg.com/564x/08/d5/21/08d521ece636dc2448bf7e142c85cc72.jpg" class="w-3/4 rounded-t-full" alt="" />
          </div>
        </div>
        <!-- Form Khodam -->
        <form class="mt-14 w-full" @submit.prevent="handleClick">
          <div id="hasilKhodammu" class="h-16 w-full items-center flex md:h-14 md:w-[55%]">
            <input id="inputKhodam" v-model="inputKhodam" type="text" class="flex-grow rounded-l-lg text-sm px-3 h-full md:px-6 md:text-lg focus:outline-none" placeholder="Masukkan namamu untuk mengecek isi Khodam dalam dirimu" />
            <button id="btnKhodam" type="submit" class="h-full px-3 lg:px-6 text-sm md:text-base text-white font-bold bg-red rounded-r-lg hover:bg-vueDark hover:text-black">Kirim</button>
          </div>
          <!-- Hasil Khodam -->
          <div v-if="hasilKhodammu" class="block p-2 rounded-md bg-white mt-5 w-96">
            {{ hasilKhodammu }}
          </div>
        </form>
      </div>
      <!-- Images -->
      <div class="absolute hidden -right-16 bottom-24 w-1/3 md:block">
        <img src="https://i.pinimg.com/564x/08/d5/21/08d521ece636dc2448bf7e142c85cc72.jpg" class="w-3/4 rounded-t-full" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
input::placeholder {
  color: #4b5563;
  font-size: 15px;
}
</style>
