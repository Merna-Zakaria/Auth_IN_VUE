<template>
  <div class="">
    <!-- <img alt="Vue logo" :src="images.login" width="200" /> -->
    <LoginForm />
  </div>
</template>

<script lang="ts">
// import { login } from "@/assets/images";
import { LoginForm } from "@/components";

export default {
  name: "LoginView",
  components: {
    LoginForm,
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
