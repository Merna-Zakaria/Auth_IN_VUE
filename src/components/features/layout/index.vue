<template>
  <div class="layout">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Header from "./header/index.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  components: {
    Header,
  },
  props: {},
};
</script>
