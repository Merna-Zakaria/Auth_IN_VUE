<template>
  <AuthLayout
  title="حساب جديد"
  footertext1="لديك حساب؟"
  footertext2="تسجيل دخول"
  path="/signup"
>
  <!-- Child content passed to the slot -->
  <LoginForm />
</AuthLayout>
</template>

<script lang="ts">
import { SignupForm, AuthLayout, LoginForm } from "@/components";


export default {
  name: "SignupView",
  components: {
    LoginForm,
    AuthLayout
  },

  setup() {
    // const images = {
    //   login,
    // };
    return {
      // images,
    };
  },
};
</script>
