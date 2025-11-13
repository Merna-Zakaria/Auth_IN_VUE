<template>
  <div class="btn_wrapper d-flex justify-center">
    <v-btn
      :type="type"
      :color="color"
      :variant="btn_type"
      :style="mergedStyles"
      :class="btn_style"
      @click="handleClick"
    >
      {{ t(text_key) }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Button",
  props: {
    color: { type: String, required: true },
    text_key: { type: String, required: true },
    btn_type: { type: String, default: "elevated" },
    content_color: { type: String, default: "#fff" },
    handleClick: { type: Function},
    btn_style: { type: String, default: "" },
    type: { type: String, default: "button" },
    width: { type: String, default: "auto" }, // ✅ New prop
  },
  setup(props) {
    const { t } = useI18n();

    const mergedStyles = computed(() => ({
      color: props.content_color,
      width: props.width, // ✅ dynamic width support
    }));

    return { t, mergedStyles };
  },
});
</script>

<style scoped>
.btn_wrapper {
  width: 100%;
}
</style>
