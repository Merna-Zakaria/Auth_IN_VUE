<template>
  <!-- 
    Signup (Registration) Form Component
    - Built with Vee-Validate for form handling
    - Yup validation schema for all fields
    - Uses Vuetify TextField, SelectField, Checkbox, and Button
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
      <!-- Full Name -->
      <TextField name="name" label="الاسم الرباعي كامل" />

      <!-- National ID -->
      <TextField name="national_id" label="الهوية الوطنية أو الإقامة" />

      <!-- Birth Date -->
      <TextField name="birth_date" label="تاريخ الميلاد" type="date" />

      <!-- Gender Dropdown -->
      <SelectField name="gender" label="الجنس" :items="genderOptions" />

      <!-- Phone Number -->
      <TextField name="phone_number" label="رقم الهاتف" />

      <!-- Email Address -->
      <TextField name="email" label="البريد الإلكتروني" type="email" />

      <!-- City -->
      <TextField name="city_id" label="المدينة/الموقع" />

      <!-- Password -->
      <TextField name="password" label="كلمة المرور" type="password" />

      <!-- Confirm Password -->
      <TextField name="password_confirmation" label="تأكيد كلمة المرور" type="password" />

      <!-- Accept Terms Checkbox -->
      <v-col cols="12" class="d-flex align-center">
        <Field name="acceptTerms" v-slot="{ field, meta, errorMessage }">
          <v-checkbox
            v-bind="field"
            label="قبول الشروط والأحكام"
            :error="!!meta.touched && !!errorMessage"
            :error-messages="errorMessage"
          />
        </Field>
      </v-col>

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
 * Signup (Registration) Component — Script Section
 *
 * Responsibilities:
 * ---------------
 * - Handle user registration using Vuex
 * - Define Yup validation rules for all form fields
 * - Use Vee-Validate for form state, validation, and submission
 * - Track form values for debugging
 */

import * as yup from "yup";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { Form, Field, useForm } from "vee-validate";
import { TextField, SelectField, Button } from "@/components";
import { RegisterForm } from "@/store/Auth/types";
import { formatDateDMY } from "@/utils/shared/index";

// Access Vuex store
const store = useStore();

// VeeValidate form composables
const { values, errors, validate } = useForm();

// Optional loading state from Vuex
const loading = computed(() => store.state.auth.loading);

/**
 * Yup Validation Schema
 * ----------------------
 * Validation rules for:
 * - Email
 * - Password + Confirmation
 * - National ID
 * - Phone Number
 * - Birth date (must be before or equal to 2007-11-19)
 * - Gender, City, Terms, Full Name
 */
const schema = yup.object({
  email: yup.string().email("البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب"),

  name: yup.string().required("الاسم مطلوب"),

  gender: yup.string().required("يرجى اختيار الجنس"),

  city_id: yup.string().required("المدينة مطلوبة"),

  national_id: yup
    .string()
    .required("الهوية مطلوبة")
    .matches(/^[12]\d{9}$/, "الهوية غير صحيحة، يجب أن تبدأ بـ 1 أو 2 وتتكون من 10 أرقام"),

  birth_date: yup
    .date()
    .required("تاريخ الميلاد مطلوب")
    .max(new Date("2007-11-19"), "حقل تاريخ الميلاد يجب أن يكون تاريخًا قبل أو يساوي 2007-11-19."),

  phone_number: yup
    .string()
    .required("رقم الهاتف مطلوب")
    .matches(/^(\+?\d{8,15})$/, "رقم هاتف غير صالح"),

  password: yup
    .string()
    .required("كلمة المرور مطلوبة")
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم"
    ),

  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
    .required("تأكيد كلمة المرور مطلوب"),

  acceptTerms: yup.boolean().oneOf([true], "يجب قبول الشروط والأحكام"),
});

/**
 * Dropdown options for gender selector
 */
const genderOptions = [
  { label: "ذكر", id: 1 },
  { label: "أنثى", id: 2 },
];

/**
 * Form Submission Handler
 * -----------------------
 * - Validates form before submit
 * - Prepares final payload (adds country_code + city_id defaults)
 * - Dispatches Vuex registration action
 */
const handleSubmit = async (values: RegisterForm) => {
  const payload = {
    ...values,
    country_code: 966, // default for Saudi Arabia
    city_id: 1, // temporary static city ID
  };

  const result = await validate();

  if (!result.valid) {
    return;
  }

  await store.dispatch("auth/registerRequest", payload);
};

/**
 * Dev logging — watch form values change
 */
watch(values, (val) => console.log("Current form values:", val));
</script>



