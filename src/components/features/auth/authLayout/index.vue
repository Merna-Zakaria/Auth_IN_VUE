<template>
  <v-container class="fill-height d-flex align-center justify-center" fluid>
    <v-card class="pa-10 rounded-xl" max-width="900" elevation="4">
      <!-- Header -->
      <v-card-title class="text-center flex-column mb-6 w-100">
        <v-img
          :src="logo"
          max-width="150"
          class="mb-4 mx-auto d-block"
          contain
        />
        <h2 class="font-weight-bold text-h5">{{ title }}</h2>
      </v-card-title>

      <!-- Main content slot -->
      <v-card-text>
        <slot />
      </v-card-text>

      <!-- Footer -->
      <v-card-actions class="justify-center mt-4">
        <span class="text-gray">{{ footertext1 }}</span>
        <RouterLink :to="path" class="primary-color font-weight-medium ms-1">
          {{ footertext2 }}
        </RouterLink>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import logo from "@/assets/images/logo.png";

export default defineComponent({
  name: "AuthLayout",
  components: { RouterLink },
  props: {
    title: { type: String, default: "" },
    footertext1: { type: String, default: "" },
    footertext2: { type: String, default: "" },
    path: { type: String, default: "/" },
  },
  setup() {
    return { logo };
  },
});
</script>

<style scoped>
.v-card {
  direction: rtl;
  font-family: "Tajawal", sans-serif;
}

/* Center the logo properly */
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Optional: ensure image scales nicely */
.v-img {
  object-fit: contain;
}
</style>
