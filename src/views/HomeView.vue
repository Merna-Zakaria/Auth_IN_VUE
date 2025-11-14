<template>
  <div class="home d-flex justify-center align-center py-16">
      <HeroSection  />
  </div>
</template>

<script lang="ts">
import { HeroSection } from "@/components"; // @ is an alias to /src

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
