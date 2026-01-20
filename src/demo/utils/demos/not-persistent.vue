<template>
  <button @click="openModal">Open Close on Backdrop Modal</button>

  <tv-modal
    :config-modal="modalConfig"
    :close-on-backdrop="true"
    @accepted="handleAccepted"
    @canceled="handleCanceled"
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
  title: "Click Outside to Close",
  description: "This modal has close-on-backdrop set to true.",
  confirmButtonText: "Okay",
  icon: "info",
});

const openModal = () => {
  modal.value.openModal();
};

const handleAccepted = () => {
  console.log("Accepted");
};

const handleCanceled = () => {
  console.log("Canceled (or closed via backdrop)");
};
</script>
