<!-- <template>
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

<style scoped lang="scss"></style> -->

<template>
  <v-app>
    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { Snackbar } from "@/components";
import i18n from "@/assets/locale";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  components: {
    Snackbar,
  },
  setup() {
    // 👇 Watch for locale changes and set direction accordingly
    watch(
      () => i18n.global.locale.value,
      (locale) => {
        console.log('locale', locale)
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      },
      { immediate: true } // run once on component mount
    );

    return {};
  },
});
</script>

<style scoped lang="scss">
</style>

