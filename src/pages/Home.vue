<script setup></script>

<template>
  <section class="pt-10 md:pt-32 lg:pt-20 overflow-hidden place-items-center" id="home">
    <div class="container">
      <div class="grid grid-cols-1 gap-10 md:-mr-1 text-white md:grid-cols-2 md:max-h-[600px]">
        <!-- Home Content -->
        <div class="flex flex-col justify-center text-start lg:pt-0 order-2 lg:order-1 md:pt-0 md:pr-5 md:text-left lg:-ml-16 xl:-ml-20 xl:pr-0">
          <h1 class="text-4xl lg:text-5xl font-bold italic mb-5 text-red">Rhein Sullivan</h1>
          <h3 class="text-base md:text-lg mb-2">Beginner Frontend Developer</h3>
          <p class="text-sm md:text-base leading-5">
            Hai, saya <strong class="italic">Rhein Sullivan</strong> mahasiswa dari jurusan Teknik Informatika di salah satu universitas yang berada di Indonesia, nama asli saya adalah Muhammad Rizky Ramadhan, tapi panggil saja Rhein. Saya
            hanya seorang pemula dibidang Frontend Developer, dan saya begitu menyukai kopi.
          </p>
          <!-- Button -->
          <div class="space-x-10 mt-10 mb-3">
            <a href="https://buymeacoffee.com/rheinsullivan" class="bg-red text-white hover:text-red py-2 px-3 shadow-[5px_5px_0px_0px_#fff] duration-300 hover:shadow-[5px_5px_0px_0px_#ff0000] hover:bg-white">Traktir Saya Kopi</a>
            <a href="#Quotes" class="btn py-2 px-3">Projek Saya</a>
          </div>
        </div>
        <!-- Image  -->
        <div class="flex flex-col justify-center items-center pt-32 md:pt-0 order-1 lg:pt-8 lg:order-2 lg:-mr-32 xl:-mr-40">
          <img src="../assets/image/rhein-about.png" alt="Foto Rhein Sullivan" class="w-[85%] md:w-[90%] lg:w-[70%] object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
