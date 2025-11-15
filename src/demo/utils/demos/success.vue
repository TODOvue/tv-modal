<template>
  <button @click="modal.openModal()">Show Success</button>

  <tv-modal
    :config-modal="modalConfig"
    @accepted="() => console.log('Accepted')"
    ref="modal"
  />
</template>

<script setup>
import { ref } from "vue";
import { TvModal } from "@todovue/tv-modal";
import "@todovue/tv-modal/style.css";

const modal = ref();
const modalConfig = ref({
  title: "Success!",
  description: "Your operation was completed successfully",
  confirmButtonText: "Great!",
  icon: "success",
});
</script>
