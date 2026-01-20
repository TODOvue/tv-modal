<template>
  <button @click="openModal">Open Modal with Slots</button>

  <tv-modal
    :config-modal="modalConfig"
    @accepted="handleAccepted"
    @canceled="handleCanceled"
    ref="modal"
  >
    <template #header>
      <div class="custom-header">
        <h2>Custom Header</h2>
      </div>
    </template>
    <div class="custom-body">
      <p>This content is injected via the default slot.</p>
      <form class="custom-form">
        <label>
          Name:
          <input type="text" placeholder="John Doe" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="john@example.com" />
        </label>
      </form>
    </div>
    <template #footer>
      <div class="custom-footer">
        <tv-button variant="primary" @click="handleAccepted">Save Custom</tv-button>
        <tv-button variant="danger" @click="handleCanceled">Cancel Custom</tv-button>
      </div>
    </template>
  </tv-modal>
</template>

<script setup>
import { ref } from "vue";
import { TvModal } from "@todovue/tv-modal";
import { TvButton } from "@todovue/tv-button";
import "@todovue/tv-modal/style.css";
import '@todovue/tv-button/style.css';

const modal = ref();
// Even with slots, we might need to pass an empty or partial object if validation requires it,
// though current validator checks for title OR description.
// Here we pass a minimal config satisfying the prop type.
const modalConfig = ref({
  title: "Slots Demo", // Validator fallback
});

const openModal = () => {
  modal.value.openModal();
};

const handleAccepted = () => {
  console.log("Custom accepted");
  modal.value.acceptModal(); // Manually close if using custom footer
};

const handleCanceled = () => {
  console.log("Custom canceled");
  modal.value.cancelModal(); // Manually close if using custom footer
};
</script>

<style scoped>
.custom-header h2 {
  margin: 0;
  color: #3b82f6;
  text-align: center;
}
.custom-body {
  padding: 1rem 0;
}
.custom-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
.custom-form label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #4b5563;
}
.custom-form input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}
.custom-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
}
</style>
