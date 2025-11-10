<template>
  <div class="about">
    <h1>{{ t("about") }}</h1>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
export default {
  props: {
    msg: String,
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>
