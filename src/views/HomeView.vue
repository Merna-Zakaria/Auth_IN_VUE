<template>
  <div class="home d-flex justify-center align-center py-16">
    <div>
      <div class="d-flex justify-center">
        <!-- <img alt="Vue logo" :src="images.welcome" width="200" /> -->
      </div>
      <HeroSection msg="Welcome to Your Vue.js 3 + TypeScript Boilerplate" />
    </div>
  </div>
</template>

<script lang="ts">
import { HeroSection } from "@/components"; // @ is an alias to /src
// import { welcome } from "@/assets/images";

export default {
  name: "HomeView",
  components: {
    HeroSection,
  },

  setup() {
    const images = {
      // welcome,
    };
    return {
      // images,
    };
  },
};
</script>
