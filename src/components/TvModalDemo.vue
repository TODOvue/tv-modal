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

const customStyle = ref({
  backgroundColor: '#0f2e5b',
  color: '#fff',
});
</script>

<template>
  <div class="tv-modal-demo-wrapper">
    <tv-button @click="openModal" rounded  :custom-style="customStyle">
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

<style lang="scss">
@use "../assets/scss/variables";
@use "sass:color";

.tv-modal-container.light-mode {
  background-color: rgba(0, 0, 0, 0.4);

  .tv-modal {
    background-color: variables.$light-card-bg;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(0, 0, 0, 0.08);

    &-title {
      color: variables.$light-text;
    }

    &-separator {
      border-top-color: rgba(variables.$light-text, 0.2);
    }

    &-description {
      color: color.adjust(variables.$light-text, $lightness: 15%);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(variables.$light-text, 0.3);

      &:hover {
        background: rgba(variables.$light-text, 0.4);
      }
    }
  }
}

.tv-modal-container.dark-mode {
  background-color: rgba(0, 0, 0, 0.7);

  .tv-modal {
    background-color: variables.$dark-card-bg;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.05);

    &-title {
      color: variables.$dark-text;
    }

    &-separator {
      border-top-color: rgba(variables.$dark-text, 0.15);
    }

    &-description {
      color: color.adjust(variables.$dark-text, $lightness: -20%);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
