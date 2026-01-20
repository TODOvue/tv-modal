<template>
  <button @click="openModal">Delete Account</button>

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
  title: "Delete Account",
  description: "Are you sure you want to delete your account? This action cannot be undone.",
  confirmButtonText: "Yes, Delete",
  cancelButtonText: "Cancel",
  icon: "warning",
  confirmButtonVariant: "danger",
  cancelButtonVariant: "success"
});

const openModal = () => {
  modal.value.openModal();
};

const handleAccepted = () => {
  console.log("Account deleted");
};

const handleCanceled = () => {
  console.log("Deletion canceled");
};
</script>
