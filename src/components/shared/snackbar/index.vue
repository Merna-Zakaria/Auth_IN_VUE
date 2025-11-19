<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
      {{ shared.snackbar.text }}

      <!-- <v-btn color="white" variant="text" @click="handleSnackbar(false)" class="d-flex justify-end ">
        X
      </v-btn> -->
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Snackbar",
  setup() {
    let snackbar = ref(true);
      const { state: {shared}} = useStore()
    let text = "Success";
    const timeout = 2000;
    const color = shared.snackbar.type == 'success' ? 'green' : 'red';  
    const handleSnackbar = (value: boolean) => {
      snackbar.value = value;
    };
    return {
      snackbar,
      text,
      timeout,
      color,
      handleSnackbar,
      shared
    };
  },
});
</script>
