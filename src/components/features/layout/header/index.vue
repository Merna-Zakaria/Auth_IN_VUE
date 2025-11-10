<template>
  <v-layout row justify-center id="Header">
    <v-toolbar app dark color="blue-grey darken-1" class="hidden-xs-and-down">
      <v-toolbar-title>Vue Js 3</v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          v-for="item in nav"
          :key="item.icon"
          :to="item.path"
          :title="item.title"
          flat
          >{{ item.text }}</v-btn
        >
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <p class="px-4 cursor_pointer" @click="changeLang">
        {{ currentLang === "EN" ? "AR" : "EN" }}
      </p>
      <Button color="white" text_key="login" :handleClick="navigateToLogin" />
            <Button color="white" text_key="signup" :handleClick="navigateToSignup" />
    </v-toolbar>
  </v-layout>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useLocale } from "vuetify";
import { useRouter } from "vue-router";
import { Button } from "@/components";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: { Button },

  setup() {
    const store = useStore();
    const { current } = useLocale();
    const router = useRouter();
    console.log("router", router);
    let currentLang = computed(() => store.state.shared.lang);
    const changeLang = () => {
      current.value = currentLang.value === "EN" ? "ar" : "en";
      store.dispatch(
        "shared/setLang",
        currentLang.value === "EN" ? "AR" : "EN"
      );
    };
    const navigateToLogin = () => {
      router.push({ path: "/login" });
    };
      const navigateToSignup = () => {
      router.push({ path: "/signup" });
    };
    const nav = [
      {
        icon: "home",
        text: "Home",
        path: "/",
        title: "Back to Home page",
        active: true,
      },
      {
        icon: "info",
        text: "About",
        path: "/about",
        title: "About this demo",
        active: false,
      },
    ];
    return {
      nav,
      current,
      currentLang,
      changeLang,
      navigateToLogin,
      navigateToSignup
    };
  },
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
