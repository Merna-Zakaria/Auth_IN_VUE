<template>
  <Form :validation-schema="schema" @submit="handleSignup" :validate-on-change="true" :validate-on-blur="false"
    :validate-on-input="false" :validate-on-model-update="false">
    <v-row dense>

      <TextField name="email" label="البريد الإلكتروني" type="email" :cols="12" :md="12" />
      <TextField name="password" label="كلمة المرور" type="password" :cols="12" :md="12" />
      <v-col cols="12" class="text-center mt-6">
        <Button type="submit" width="70%" btn_type="flat" text_key="login"
          :content_color="$vuetify.theme.themes.myCustomLightTheme.colors.white"
          :color="$vuetify.theme.themes.myCustomLightTheme.colors.bg_primary" class="mx-auto" />
      </v-col>
    </v-row>
  </Form>

</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { Form, Field, useForm } from "vee-validate";
import * as yup from "yup";
import { watch } from "vue";
import { TextField, SelectField, Button } from "@/components";

const store = useStore();
// const signupform= useForm()
// Initialize VeeValidate form composable
const { values, errors, validate } = useForm();
const loading = computed(() => store.state.auth.loading);

const schema = yup.object({
  email: yup
    .string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: yup
    .string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
});

// console.log('result', signupform)
const handleSignup = async (values) => {
  // const result = await validate()
  // if (!result.valid) {
  //   console.log('Form has errors:', errors.value)
  //   return
  // }

  console.log("Form is valid!", values);
  // await store.dispatch('auth/register', values)
};
watch(values, (val) => console.log("Current form values:", val));
</script>
