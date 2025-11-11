<template>
  <v-container class="fill-height d-flex align-center justify-center" fluid>
    <v-card class="pa-10 rounded-xl" max-width="900" elevation="4">
      <v-card-title class="text-center justify-center flex-column mb-6">
        <v-img src="/images/logo.png" max-width="80" class="mb-4" />
        <h2 class="font-weight-bold text-h5">حساب جديد</h2>
      </v-card-title>

      <Form :validation-schema="schema" @submit="handleSignup"   :validate-on-change="true"
  :validate-on-blur="false"
  :validate-on-input="false"
  :validate-on-model-update="false">
        <v-row dense>
          <v-col cols="12" md="6">
            <Field name="fullName" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                label="الاسم الرباعي كامل"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
                variant="outlined"
                density="comfortable"
                dir="rtl"
              />
            </Field>
          </v-col>
           <TextField name="email" label="البريد الإلكتروني" type="email" cols="12" md="6"/>

          <v-col cols="12" md="6">
            <Field name="gender" v-slot="{ field, meta }">
              <v-select
                v-bind="field"
                :items="['ذكر', 'أنثى']"
                label="الجنس"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" md="6">
            <Field name="city" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                label="المدينة/الموقع"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" md="6">
            <Field name="idNumber" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                label="الهوية الوطنية أو الإقامة"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" md="6">
            <Field name="birthDate" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                type="date"
                label="تاريخ الميلاد"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" md="6">
            <Field name="phone" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                label="رقم الهاتف"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <!-- <v-col cols="12" md="6">
            <Field name="email" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                type="email"
                label="البريد الإلكتروني"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col> -->

          <v-col cols="12" md="6">
            <Field name="password" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                type="password"
                label="كلمة المرور"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" md="6">
            <Field name="confirmPassword" v-slot="{ field, meta }">
              <v-text-field
                v-bind="field"
                type="password"
                label="تأكيد كلمة المرور"
                variant="outlined"
                density="comfortable"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" class="d-flex align-center justify-end">
            <Field name="acceptTerms" v-slot="{ field, meta }">
              <v-checkbox
                v-bind="field"
                label="قبول الشروط والأحكام"
                dir="rtl"
                :error="!!meta.touched && !!meta.error"
                :error-messages="meta.error"
              />
            </Field>
          </v-col>

          <v-col cols="12" class="text-center mt-6">
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
        </v-row>
      </Form>

      <v-card-actions class="justify-center mt-4">
        <span class="text-gray">لديك حساب؟</span>
        <RouterLink to="/login" class="text-amber-darken-2 font-weight-medium ms-1">
          تسجيل دخول
        </RouterLink>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Form, Field, useForm } from 'vee-validate'
import * as yup from 'yup'
import { watch } from 'vue'
import TextField from "@/components/controls/textField";

const store = useStore()
// const signupform= useForm()
// Initialize VeeValidate form composable
const { values, errors, validate } = useForm()
const loading = computed(() => store.state.auth.loading)

const schema = yup.object({
  email: yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
  // fullName: yup.string().required('الاسم مطلوب'),
  // gender: yup.string().required('يرجى اختيار الجنس'),
  // city: yup.string().required('المدينة مطلوبة'),
  // idNumber: yup.string().required('الهوية مطلوبة'),
  // birthDate: yup.date().required('تاريخ الميلاد مطلوب'),
  // phone: yup.string().required('رقم الهاتف مطلوب').matches(/^(\+?\d{8,15})$/, 'رقم هاتف غير صالح'),
  // password: yup.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل').required('كلمة المرور مطلوبة'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'كلمة المرور غير متطابقة')
  //   .required('تأكيد كلمة المرور مطلوب'),
  // acceptTerms: yup.boolean().oneOf([true], 'يجب قبول الشروط والأحكام')
})

// console.log('result', signupform)
const handleSignup = async (values) => {
  // const result = await validate()
  // if (!result.valid) {
  //   console.log('Form has errors:', errors.value)
  //   return
  // }

  console.log('Form is valid!', values)
  // await store.dispatch('auth/register', values)
}
watch(values, (val) => console.log('Current form values:', val))
</script>

<style scoped>
.v-card {
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
}
</style>
