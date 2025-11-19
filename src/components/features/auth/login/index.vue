<template>
  <!-- 
    Login Form Component
    - Uses Vee-Validate + Yup for validation
    - Built with Vuetify inputs and button
  -->
  <Form
    :validation-schema="schema"
    @submit="(values) => handleSubmit(values)"
    :validate-on-change="true"
    :validate-on-blur="false"
    :validate-on-input="false"
    :validate-on-model-update="false"
  >
    <v-row dense>
      <!-- Email Field -->
      <TextField
        name="email"
        label="البريد الإلكتروني"
        type="email"
        :cols="12"
        :md="12"
      />

      <!-- Password Field -->
      <TextField
        name="password"
        label="كلمة المرور"
        type="password"
        :cols="12"
        :md="12"
      />

      <!-- Submit Button -->
      <v-col cols="12" class="text-center mt-6">
        <Button
          type="submit"
          width="70%"
          btn_type="flat"
          text_key="login"
          :content_color="$vuetify.theme.themes.myCustomLightTheme.colors.white"
          :color="$vuetify.theme.themes.myCustomLightTheme.colors.bg_primary"
          class="mx-auto"
        />
      </v-col>
    </v-row>
  </Form>
</template>

<script setup lang="ts">
/**
 * Login Form Component (script section)
 *
 * - Uses Vee-Validate for form state and validation
 * - Yup defines the validation schema
 * - Vuex dispatches the login request
 */

import { useStore } from "vuex";
import { Form, useForm } from "vee-validate";
import * as yup from "yup";
import { watch } from "vue";
import { TextField, Button } from "@/components";
import { LoginPayload } from "@/store/Auth/types";

// Access Vuex store
const store = useStore();

// Initialize VeeValidate form tools
const { values, errors, validate } = useForm();

/**
 * Yup Validation Schema
 * Defines validation for:
 * - Email
 * - Password
 */
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

/**
 * Form Submission Handler
 * - Validates form before sending
 * - Dispatches Vuex login request
 */
const handleSubmit = async (values: LoginPayload) => {
  const result = await validate();
  if (!result.valid) return;

  await store.dispatch("auth/loginRequest", values);
};

// Debug: log form values on change
watch(values, (val) => console.log("Current form values:", val));
</script>
