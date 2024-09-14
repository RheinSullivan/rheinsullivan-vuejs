import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  server: {
    mimeTypes: {
      "application/javascript": ["js"],
    },
  },
};
