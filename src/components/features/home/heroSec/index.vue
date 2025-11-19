<template>
  <div class="hello">
    <h1 class="primary-color lato-bold">{{ msg }}</h1>
    <div class="d-flex justify-center">
      مرحبا بك : 👋🙂
    </div>
  </div>
</template>

<script lang="ts">
// import { computed, watch, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

export default {
  name: "HeroSection",
  props: {
    msg: String,
  },
  setup(props: any) {
    const { t } = useI18n();

    // let usersNo = ref(0);
    const store = useStore();
    // let userList = computed(() => store.state.user.users);
    // const getUsers = () => {
    //   store.dispatch("user/getUsersRequest", "");
    // };
    const log = (msg1: string, msg2: string) => {
      console.log(msg1, msg2);
    };
    // watch(
    //   userList,
    //   (newValue, _oldValue) => {
    //     usersNo.value = JSON.parse(JSON.stringify(newValue)).length;
    //   },
    //   { deep: true }
    // );
    return {
      t,
      log,
      // usersNo,
      // getUsers,
      // userList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./index.scss"></style>
