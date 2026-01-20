<script setup>
import { TvButton } from '@todovue/tv-button';
import useModal from '../composables/useModal.js'

const props = defineProps({
  configModal: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.title || value.description;
    }
  },
  theme: {
    type: String,
    default: '',
    validator: (value) => {
      return ['', 'dark-mode', 'light-mode'].includes(value);
    }
  },
  closeOnBackdrop: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['accepted', 'canceled']);

const {
  showModal,
  tvModal,
  animateModal,
  acceptModal,
  cancelModal,
  openModal,
  handleEscapeKey,
  currentTheme,
} = useModal(emit);

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    cancelModal();
  } else {
    animateModal();
  }
}

defineExpose({
  openModal
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="tv-modal-container"
      :class="theme || currentTheme"
      @click.self="handleBackdropClick"
      @keydown.esc="handleEscapeKey"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="configModal.title ? 'tv-modal-title' : undefined"
      :aria-describedby="configModal.description ? 'tv-modal-description' : undefined"
      tabindex="-1"
    >
      <div class="tv-modal" ref="tvModal">
        <slot name="header">
          <div
            class="tv-modal-image tv-m-auto"
            :class="`tv-modal-${configModal.icon}`"
            v-if="configModal.icon"
          >
            <svg v-if="configModal.icon === 'warning'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16v2h2v-2h-2zm0-6v4h2v-4h-2z"/>
            </svg>
            <svg v-if="configModal.icon === 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <svg v-if="configModal.icon === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <svg v-if="configModal.icon === 'info'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48px" height="48px">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
          <div
            id="tv-modal-title"
            class="tv-modal-title"
            v-if="configModal.title"
          >
            {{ configModal.title }}
          </div>
        </slot>
        <hr
          class="tv-modal-separator"
          v-if="($slots.header || configModal.title) && ($slots.default || configModal.description)"
        />
        <slot>
          <div
            id="tv-modal-description"
            class="tv-modal-description"
            v-if="configModal.description"
          >
            {{ configModal.description }}
          </div>
        </slot>
        <slot name="footer">
          <div class="tv-modal-actions">
            <tv-button
              :variant="configModal.confirmButtonVariant || 'success'"
              rounded
              @click="acceptModal"
              v-if="configModal.confirmButtonText"
            >
              {{ configModal.confirmButtonText }}
            </tv-button>
            <tv-button
              :variant="configModal.cancelButtonVariant"
              rounded
              @click="cancelModal"
              v-if="configModal.cancelButtonText"
            >
              {{ configModal.cancelButtonText }}
            </tv-button>
          </div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<style></style>
