<template>
  <div>
    <v-form v-model="valid">
      <v-col cols="12" md="4" class="margin_auto">
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4" xl="12" class="margin_auto">
        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4" class="margin_auto">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-col>
      <Button
        styles="margin_auto"
        btn_type="depressed"
        text_key="login"
        handleClick=""
        :content_color="$vuetify.theme.themes.myCustomLightTheme.colors.white"
        :color="$vuetify.theme.themes.myCustomLightTheme.colors.primary"
      />
    </v-form>
  </div>
</template>
<script lang="ts">
import { Button } from "@/components";

export default {
  // eslint-disable-next-line
  name: "Login",
  components: { Button },
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
