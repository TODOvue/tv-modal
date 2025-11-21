<template>
  <button @click="openModal">Open Modal</button>

  <tv-modal
    :config-modal="modalConfig"
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
  title: "Are you sure you want to delete it?",
  description: "If you delete it there is no step back, it will be permanently deleted",
  confirmButtonText: "Yes, delete it",
  cancelButtonText: "No, keep it",
  icon: "warning",
});

const openModal = () => {
  modal.value.openModal();
};

const handleAccepted = () => {
  console.log("User accepted");
};

const handleCanceled = () => {
  console.log("User canceled");
};
</script>
