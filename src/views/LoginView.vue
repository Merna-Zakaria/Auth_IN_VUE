<template>
  <AuthLayout
  title="تسجيل دخول"
  footertext1="ليس لديك حساب؟"
  footertext2="حساب جديد"
  path="/signup"
>
  <!-- Child content passed to the slot -->
  <LoginForm />
</AuthLayout>
</template>

<script lang="ts">
import {AuthLayout, LoginForm } from "@/components";


export default {
  name: "SignupView",
  components: {
    LoginForm,
    AuthLayout
  },

  setup() {
    return {};
  },
};
</script>
