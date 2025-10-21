<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { TvButton } from '@todovue/tv-button';
import TvModal from './TvModal.vue';

defineProps({
  buttonText: {
    type: String,
    default: 'Open Modal'
  },
  configModal: {
    type: Object,
    required: true
  }
});

const modal = ref();
const currentTheme = ref('');

const detectParentTheme = () => {
  let element = document.querySelector('.tv-modal-demo-wrapper');

  while (element) {
    if (element.classList.contains('dark-mode')) return 'dark-mode';
    if (element.classList.contains('light-mode')) return 'light-mode';
    element = element.parentElement;
  }

  if (document.querySelector('.dark-mode')) return 'dark-mode';
  if (document.querySelector('.light-mode')) return 'light-mode';

  return '';
};

onMounted(() => {
  currentTheme.value = detectParentTheme();

  const observer = new MutationObserver(() => {
    currentTheme.value = detectParentTheme();
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});

const openModal = () => {
  currentTheme.value = detectParentTheme();
  modal.value.openModal();
};

const handleAccept = () => {
  console.log('Modal accepted');
};

const handleCancel = () => {
  console.log('Modal canceled');
};
</script>

<template>
  <div class="tv-modal-demo-wrapper">
    <tv-button @click="openModal" isSuccess>
      {{ buttonText }}
    </tv-button>

    <tv-modal
      :config-modal="configModal"
      :theme="currentTheme"
      @accepted="handleAccept"
      @canceled="handleCancel"
      ref="modal"
    />
  </div>
</template>

<style scoped>
.tv-modal-demo-wrapper {
  display: inline-block;
}
</style>
