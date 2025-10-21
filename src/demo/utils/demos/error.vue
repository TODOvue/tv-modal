<template>
  <button @click="modal.openModal()">Show Error</button>

  <tv-modal
    :config-modal="modalConfig"
    @accepted="() => console.log('Accepted')"
    @canceled="() => console.log('Canceled')"
    ref="modal"
  />
</template>

<script setup>
import { ref } from "vue";
import { TvModal } from "@todovue/tv-modal";

const modal = ref();
const modalConfig = ref({
  title: "Error occurred",
  description: "Something went wrong. Please try again later.",
  confirmButtonText: "OK",
  cancelButtonText: "Cancel",
  icon: "error",
});
</script>
