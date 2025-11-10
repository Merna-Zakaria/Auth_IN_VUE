<template>
  <div class="hello">
    <h1 class="blue-color lato-bold">{{ msg }}</h1>
    <div class="d-flex justify-center">
      <div>
        <Button
          btn_style="mb-4"
          text_key="users"
          btn_type="depressed"
          :handleClick="getUsers"
          :content_color="$vuetify.theme.themes.myCustomLightTheme.colors.white"
          :color="$vuetify.theme.themes.myCustomLightTheme.colors.primary"
        />
        <p v-if="usersNo">
          {{ t("usersNo") }}: <span>{{ usersNo }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, watch, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

import { Button } from "@/components";
export default {
  name: "HeroSection",
  components: { Button },
  props: {
    msg: String,
  },
  setup(props: any) {
    const { t } = useI18n();

    let usersNo = ref(0);
    const store = useStore();
    let userList = computed(() => store.state.user.users);
    const getUsers = () => {
      store.dispatch("user/getUsersRequest", "");
    };
    const log = (msg1: string, msg2: string) => {
      console.log(msg1, msg2);
    };
    watch(
      userList,
      (newValue, _oldValue) => {
        usersNo.value = JSON.parse(JSON.stringify(newValue)).length;
      },
      { deep: true }
    );
    return {
      t,
      log,
      usersNo,
      getUsers,
      userList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./index.scss"></style>
