<template>
    <v-col :cols="cols" :md="md">
        <Field :name="name" v-slot="{ field, meta, errorMessage }">
            <v-text-field v-bind="field" :type="type" :label="label" :variant="variant" :density="density" :dir="dir"
                :error="!!meta.touched && !!errorMessage" :error-messages="errorMessage" />
                <!-- <div>{{ field }}</div> -->
                <!-- <div>{{ meta }}</div> -->
                <div>{{ errorMessage }}</div>
        </Field>
    </v-col>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";


const props = defineProps<{
  cols: number;
  md: number;
  name: string;
  label: string;
  type?: string;
  variant?: "outlined" | "filled" | "plain" | "underlined";
  density?: "default" | "comfortable" | "compact";
  dir?: "rtl" | "ltr";
}>();

const type = props.type ?? "text";
const variant = props.variant ?? "outlined";
const density = props.density ?? "comfortable";
const dir = props.dir ?? "rtl";
</script>