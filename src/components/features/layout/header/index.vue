<template>
  <!-- APP BAR -->
  <v-app-bar color="blue-grey-darken-1 px-4" dark app>
    <v-row class="d-flex d-md-none px-2" justify="space-between" align="center">

      <!-- MOBILE: LOGO ON RIGHT -->
      <v-col cols="auto">
        <v-img :src="logo" width="90" contain class="d-flex d-md-none ml-auto mr-3 " />
      </v-col>

      <!-- MOBILE: BURGER MENU -->
      <v-col cols="auto">
        <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
      </v-col>


    </v-row>

    <!-- DESKTOP: LOGO (LEFT) -->
    <v-img :src="logo" max-width="110" contain class="ml-2 d-none d-md-flex" />

    <!-- DESKTOP NAV -->
    <v-row class="flex-grow-1 d-none d-md-flex" justify="center">
      <v-toolbar-items>
        <v-btn v-for="item in nav" :key="item.icon" :to="item.path" flat>
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-row>

    <!-- DESKTOP ACTIONS -->
    <div class="d-none d-md-flex align-center mr-4">
      <p class="px-4 cursor_pointer" @click="changeLang">
        {{ currentLang === 'EN' ? 'AR' : 'EN' }}
      </p>

      <Button color="white" text_key="loginBtn" :handleClick="() => handleNavigation('/login')" v-if="!user"/>
      <Button color="white" text_key="logout" :handleClick="handleLogout" v-if="user"/>
    </div>
  </v-app-bar>


  <!-- MOBILE DRAWER -->
  <v-navigation-drawer v-model="drawer" temporary class="d-md-none">

    <!-- NAV ITEMS -->
    <v-list nav>
      <v-list-item v-for="item in nav" :key="item.icon" :to="item.path">
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider class="my-2" />

    <!-- LANG SWITCH -->
    <v-list-item @click="changeLang" class="cursor_pointer">
      <v-list-item-title>
        {{ currentLang === 'EN' ? 'Switch to AR' : 'Switch to EN' }}
      </v-list-item-title>
    </v-list-item>

    <!-- LOGIN BUTTON -->
    <div class="px-4 mt-4">
      <Button block color="blue-grey-darken-2" text_key="loginBtn" :handleClick="() => handleNavigation('/login')"
        v-if="!user" />
      <Button block color="blue-grey-darken-2" text_key="logout" :handleClick="handleLogout" v-if="user" />

    </div>

  </v-navigation-drawer>
</template>


<script lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useLocale } from "vuetify";
import { useRouter } from "vue-router";
import { Button } from "@/components";
import logo from "@/assets/images/logo.png";

export default {
  name: "Header",
  components: { Button },

  setup() {
    const store = useStore();
    const { current } = useLocale();
    const drawer = ref(false);

    const router = useRouter();

    let currentLang = computed(() => store.state.shared.lang);
    
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : "";
    const changeLang = () => {
      current.value = currentLang.value === "EN" ? "ar" : "en";
      store.dispatch(
        "shared/setLang",
        currentLang.value === "EN" ? "AR" : "EN"
      );
    };
    const handleNavigation = (path: string) => {
      router.push({ path: path });
    };
    const handleLogout = () => {
      localStorage.removeItem('user')
      handleNavigation('/login')
    }
    const nav = [
      {
        icon: "home",
        text: "الصفحه الرئيسيه",
        path: "/",
        title: "Back to Home page",
        active: true,
      },
      {
        icon: "info",
        text: "عن الشركه",
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
      handleNavigation,
      logo,
      drawer,
      user,
      handleLogout
    };
  },
};
</script>
<style lang="scss" src="./index.scss"></style>
