<script setup></script>

<template>
  <section id="contact">
    <div class="relative pb-10 rounded-lg -mx-10 md:pb-32">
      <div class="p-10">
        <!-- Tittle -->
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-red mb-4 mt-5 md:mt-0">Contact <span class="text-white">Me</span></h2>
            <p class="text-sm md:text-base text-white md:w-full">Hubungi saya, jika ada yang ingin ditanyakan, atau jika ada keperluan dengan saya</p>
          </div>
          <div class="block w-36 md:hidden">
            <img src="../assets/rhein-tab.png" alt="" />
          </div>
        </div>
        <!-- Form Contact -->
        <form class="mt-14 w-full" action="#">
          <div class="h-16 w-full items-center flex md:h-14 md:w-1/2">
            <input type="text" class="flex-grow rounded-l-lg text-sm px-3 h-full md:px-6 md:text-lg" placeholder="Silahkan kirim pesan dan emailmu kesini" />
            <button class="h-full px-3 lg:px-6 text-sm md:text-base text-white font-bold bg-red rounded-r-lg hover:bg-vueDark hover:text-black">Kirim</button>
          </div>
        </form>
      </div>
      <!-- Images -->
      <div class="absolute hidden right-10 bottom-20 w-1/3 md:block">
        <img src="../assets/rhein-tab.png" alt="" />
      </div>
    </div>
  </section>
</template>
