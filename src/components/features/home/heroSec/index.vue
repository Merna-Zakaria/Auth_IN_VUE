<template>
  <div class="hello">
    <h1 class="primary-color lato-bold">{{ msg }}</h1>
    <div class="d-flex justify-center">
      مرحبا بك : 👋🙂
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";

export default {
  name: "HeroSection",
  props: {
    msg: String,
  },
  setup(props: any) {
    const { t } = useI18n();

    const log = (msg1: string, msg2: string) => {
      console.log(msg1, msg2);
    };
    return {
      t,
      log,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./index.scss"></style>
