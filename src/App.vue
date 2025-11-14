<template>
  <v-app >
    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script lang="ts" dir="rtl">
import { defineComponent, onMounted, watch } from "vue";
import { Snackbar } from "@/components";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Layout",
  components: {
    Snackbar,
  },
   setup() {
    const { locale } = useI18n();
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
      locale
    };
  },
});
</script>


