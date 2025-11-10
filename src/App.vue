<template>
  <v-app>
    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Snackbar } from "@/components";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  components: {
    Snackbar,
  },
  props: {},
});
</script>

<style scoped lang="scss"></style>
