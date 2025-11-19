<template>
  <AuthLayout
  title="حساب جديد"
  footertext1="لديك حساب؟"
  footertext2="تسجيل دخول"
  path="/login"
>
  <!-- Child content passed to the slot -->
  <SignupForm />
</AuthLayout>
</template>

<script lang="ts">
import { SignupForm, AuthLayout } from "@/components";


export default {
  name: "SignupView",
  components: {
    SignupForm,
    AuthLayout
  },

  setup() {
    return {
    };
  },
};
</script>
