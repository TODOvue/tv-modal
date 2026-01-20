<script setup>
import { TvButton } from '@todovue/tv-button';
import useModal from '../composables/useModal.js'

defineProps({
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
      @click.self="animateModal"
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
            :aria-label="`${configModal.icon} icon`"
          ></div>
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
              variant="success"
              rounded
              @click="acceptModal"
              v-if="configModal.confirmButtonText"
            >
              {{ configModal.confirmButtonText }}
            </tv-button>
            <tv-button
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
