<template>
  <div class="btn_wrapper">
    <v-btn
      :color="color"
      btn_type
      :style="styles"
      @click="handleClick"
      :class="btn_style"
      >{{ t(text_key) }}</v-btn
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
  color: string;
  text_key: string;
  btn_type: string;
  content_color: string;
  // eslint-disable-next-line
  handleClick: () => {};
  btn_style: string;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: [
    "color",
    "text_key",
    "btn_type",
    "content_color",
    "handleClick",
    "btn_style",
  ],
  setup(props: Props) {
    const { t } = useI18n();
    return {
      t,
      styles: {
        color: props.content_color,
      },
    };
  },
});
</script>
<style scoped lang="scss"></style>
