<template>
  <v-app>
    <v-layout>
      <Header />

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>


<script lang="ts">
import Header from "./header/index.vue";
export default {
  name: "Layout",
  components: {
    Header,
  },
  props: {},
};
</script>
