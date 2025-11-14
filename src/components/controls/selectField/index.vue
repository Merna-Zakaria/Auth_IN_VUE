<template>
  <v-col :cols="cols" :md="md">
    <Field :name="name" v-slot="{ field, meta, errorMessage }">
      <label class="field-label">{{ label }}</label>
      <v-select
        v-bind="field"
        :items="items"
        item-title="label"
        item-value="id"
        :placeholder="computedPlaceholder"
        :variant="variant"
        :density="density"
        :dir="dir"
        :error="!!meta.touched && !!errorMessage"
        :error-messages="errorMessage"
      />
    </Field>
  </v-col>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "SelectField",
  components: { Field },
  props: {
    cols: { type: Number, default: 12 },
    md: { type: Number, default: 4 },
    placeholder: { type: String, default: "" },
    name: { type: String, required: true },
    label: { type: String, required: true },
    items: {
      type: Array as () => { label: string; id: number }[],
      required: true,
    },
    variant: {
      type: String as () => "outlined" | "filled" | "plain" | "underlined",
      default: "outlined",
    },
    density: {
      type: String as () => "default" | "comfortable" | "compact",
      default: "comfortable",
    },
    dir: {
      type: String,
      default: "rtl",
      validator: (val: string) => ["ltr", "rtl"].includes(val),
    },
  },
  setup(props) {
    const computedPlaceholder = computed(() => {
      return props.placeholder || `أدخل ${props.label}`;
    });
    return { computedPlaceholder };
  },
});
</script>
