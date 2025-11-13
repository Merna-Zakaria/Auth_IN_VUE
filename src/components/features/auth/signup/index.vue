<template>
  <!-- <v-container class="fill-height d-flex align-center justify-center" fluid>
    <v-card class="pa-10 rounded-xl" max-width="900" elevation="4">
      <v-card-title class="text-center justify-center flex-column mb-6">
        <v-img src="/images/logo.png" max-width="80" class="mb-4" />
        <h2 class="font-weight-bold text-h5">حساب جديد</h2>
      </v-card-title> -->

  <Form :validation-schema="schema" @submit="handleSignup" :validate-on-change="true" :validate-on-blur="false"
    :validate-on-input="false" :validate-on-model-update="false">
    <v-row dense>
      <TextField name="fullName" label="الاسم الرباعي كامل" />
      <TextField name="idNumber" label="الهوية الوطنية أو الإقامة" />
      <TextField name="birthDate" label="تاريخ الميلاد" type="date" />
      <SelectField name="gender" label="الجنس" :items="['ذكر', 'أنثى']" />
      <TextField name="phone" label="رقم الهاتف" />
      <TextField name="email" label="البريد الإلكتروني" type="email" />
      <TextField name="city" label="المدينة/الموقع" />
      <TextField name="password" label="كلمة المرور" type="password" />
      <TextField name="confirmPassword" label="تأكيد كلمة المرور" type="password" />

      <v-col cols="12" class="d-flex align-center justify-end">
        <Field name="acceptTerms" v-slot="{ field, meta }">
          <v-checkbox v-bind="field" label="قبول الشروط والأحكام" dir="rtl" :error="!!meta.touched && !!meta.error"
            :error-messages="meta.error" />
        </Field>
      </v-col>
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
  fullName: yup.string().required("الاسم مطلوب"),
  gender: yup.string().required('يرجى اختيار الجنس'),
  city: yup.string().required("المدينة مطلوبة"),
  idNumber: yup.string().required("الهوية مطلوبة"),
  birthDate: yup.date().required("تاريخ الميلاد مطلوب"),
  phone: yup
    .string()
    .required("رقم الهاتف مطلوب")
    .matches(/^(\+?\d{8,15})$/, "رقم هاتف غير صالح"),
  password: yup
    .string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
    .required("تأكيد كلمة المرور مطلوب"),
  acceptTerms: yup.boolean().oneOf([true], "يجب قبول الشروط والأحكام"),
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


<!-- <v-col cols="12" class="text-center mt-6">
            <v-btn
              color="amber-darken-2"
              class="text-white px-12"
              :loading="loading"
              type="submit"
              rounded
              size="large"
            >
              تسجيل
            </v-btn>
          </v-col>

          const handleSignup = async (values) => {
  // const result = await validate()
  // if (!result.valid) {
  //   console.log('Form has errors:', errors.value)
  //   return
  // }

  console.log('Form is valid!', values)
  // await store.dispatch('auth/register', values)
}
watch(values, (val) => console.log('Current form values:', val)) -->