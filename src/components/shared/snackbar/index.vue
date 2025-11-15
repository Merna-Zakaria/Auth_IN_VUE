<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
      {{ text }}

      <v-btn color="blue" variant="text" @click="handleSnackbar(false)">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Snackbar",
  setup() {
    let snackbar = ref(true);
    let text = "My timeout is set to 2000.";
    const timeout = 2000;
    const color = "sucess";
    const snackbarInfo = {};
    const log = (msg1: unknown, msg2: unknown) => {
      console.log(msg1, msg2);
    };
    const handleSnackbar = (value: boolean) => {
      snackbar.value = value;
    };
    return {
      snackbar,
      text,
      timeout,
      color,
      log,
      handleSnackbar,
    };
  },
});
</script>
