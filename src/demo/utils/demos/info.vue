<template>
  <button @click="modal.openModal()">Show Info</button>

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
import '@todovue/tv-button/style.css';

const modal = ref();
const modalConfig = ref({
  title: "Information",
  description: "Here is some important information you should know about.",
  confirmButtonText: "Got it",
  icon: "info",
});
</script>
