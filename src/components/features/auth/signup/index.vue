<template>
  <Form :validation-schema="schema" @submit="(values) => handleSubmit(values)" :validate-on-change="true"
    :validate-on-blur="false" :validate-on-input="false" :validate-on-model-update="false">
    <v-row dense>
      <TextField name="name" label="الاسم الرباعي كامل" />
      <TextField name="national_id" label="الهوية الوطنية أو الإقامة" />
      <TextField name="birth_date" label="تاريخ الميلاد" type="date" />
      <SelectField name="gender" label="الجنس" :items="genderOptions" />
      <TextField name="phone_number" label="رقم الهاتف" />
      <TextField name="email" label="البريد الإلكتروني" type="email" />
      <TextField name="city_id" label="المدينة/الموقع" />
      <TextField name="password" label="كلمة المرور" type="password" />
      <TextField name="password_confirmation" label="تأكيد كلمة المرور" type="password" />

      <v-col cols="12" class="d-flex align-center">
        <Field name="acceptTerms" v-slot="{ field, meta }">
          <v-checkbox v-bind="field" label="قبول الشروط والأحكام" :error="!!meta.touched && !!meta.error"
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
const { values, errors, validate } = useForm();
const loading = computed(() => store.state.auth.loading);

const schema = yup.object({
  email: yup
    .string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  name: yup.string().required("الاسم مطلوب"),
  gender: yup.string().required('يرجى اختيار الجنس'),
  city_id: yup.string().required("المدينة مطلوبة"),
national_id: yup
  .string()
  .required("الهوية مطلوبة")
  .matches(/^[12]\d{9}$/, "الهوية غير صحيحة، يجب أن تبدأ بـ 1 أو 2 وتتكون من 10 أرقام"),
  birth_date: yup.date().required("تاريخ الميلاد مطلوب"),
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

const genderOptions = [
  { label: "ذكر", id: 1 },
  { label: "أنثى", id: 2 },
];

const handleSubmit = async (values) => {
  let payload = {
    ...values, country_code: 966, city_id: 1
  }
  const result = await validate()
  if (!result.valid) {
    console.log('Form has errors:', errors.value)
    return
  }

  console.log('Form is valid!', values)
  await store.dispatch('auth/register', payload)
}
watch(values, (val) => console.log("Current form values:", val));
</script>

