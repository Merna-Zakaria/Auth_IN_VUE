<template>
  <v-app >
    <v-main>
      <router-view />
      <Snackbar v-if="shared.snackbar && shared.snackbar.type"/>
    </v-main>
  </v-app>
</template>

<script lang="ts" dir="rtl">
import { defineComponent, onMounted, watch, computed } from "vue";
import { Snackbar } from "@/components";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default defineComponent({
  name: "Layout",
  components: {
    Snackbar,
  },
   setup() {
    const { locale } = useI18n();
    const { state: {shared}} = useStore()
    const updateHtmlDirection = (loc: string) => {
      document.documentElement.lang = loc;
      document.documentElement.dir = loc === "ar" ? "rtl" : "ltr";
    };


    // Run on mount
    onMounted(() => {
      updateHtmlDirection(locale.value);
    });

    // Watch language change
    watch(locale, (newLocale) => {
      updateHtmlDirection(newLocale);
    });

    return {
      locale,
      shared
    };
  },
});
</script>


