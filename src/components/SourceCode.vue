<script>
export default {
  methods: {
    copyCode() {
      const code = this.$refs.codeBlock.innerText;
      navigator.clipboard.writeText(code).then(
        () => {
          alert("Code copied to clipboard!");
        },
        (err) => {
          console.error("Failed to copy: ", err);
        }
      );
    },
  },
};
</script>

<template>
  <div class="flex justify-center lg:my-24">
    <div class="relative flex h-full w-full flex-col overflow-hidden border-0 z-2 rounded-[10px] opacity-100 transform scale-100 perspective-[700px] rotate-x-0 rotate-y-0 rotate-z-0 bg-[#1e1e1e]">
      <div class="flex h-10 w-full justify-between items-center gap-4 px-5 bg-gray-800">
        <div class="grid h-full w-full items-center grid-cols-[60px_1fr_60px] gap-4">
          <div class="flex items-center gap-2">
            <div class="h-[13px] w-[13px] rounded-full bg-[#ff5f57]"></div>
            <div class="h-[13px] w-[13px] rounded-full bg-[#febc2e]"></div>
            <div class="h-[13px] w-[13px] rounded-full bg-[#28c840]"></div>
          </div>
          <div class="flex justify-center items-center gap-2">
            <span> <img src="../assets/vue.svg" alt="" class="w-4 h-4" /></span>
            <span class="bg-transparent outline-none text-white">app.vue</span>
          </div>
          <div>
            <button @click="copyCode" class="text-white py-2 focus:text-vueGreen">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M16 3v4a1 1 0 001 1h4m-5 0a2 2 0 002-2V3m0 0H13a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="py-[23px]">
        <textarea
          class="whitespace-pre word-wrap-normal absolute z-10 box-border resize-none overflow-hidden bg-transparent hover:outline-none focus:outline-none left-0 h-[189px] w-[368.8px] pl-[23px] text-[rgba(255,0,0,0)] caret-gray-500 text-[14px]"
        ></textarea>
        <div class="transition-opacity duration-500 text-white">
          <pre
            class="bg-[#1E1E1E]"
          ><code ref="codeBlock"><span class="px-[23px]"><span>&lt;</span><span class="text-green-500">div</span><span class="text-purple-600"> id</span><span style="color:#D4D4D4">=</span><span>"<span class="text-blue-400">app</span>"</span><span>&gt;</span></span>
<span class="px-[23px]"><span>  &lt;</span><span class="text-green-500">button</span><span > @<span class="text-purple-600">click</span>="count<span class="text-orange-600">++</span>"&gt;</span></span>
<span class="px-[23px]"><span>    Count</span><span> is:</span><span class="text-yellow-400"> {</span><span class="text-purple-600">{ </span><span>count</span><span class="text-purple-600"> }</span><span  class="text-yellow-400">}</span></span>
<span class="px-[23px]"><span>  &lt;/ <span class="text-green-500">button</span>&gt;</span></span>
<span class="px-[23px]"><span>&lt;/<span class="text-green-500">div</span>&gt;</span></span></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
