import { nextTick, ref, onBeforeUnmount, onMounted, watch } from "vue";

const useModal = (emit) => {
  const showModal = ref(false);
  const tvModal = ref();
  const previousActiveElement = ref(null);
  const detectedTheme = ref('');
  
  const detectTheme = () => {
    if (typeof document === 'undefined') return '';
    
    const body = document.body;
    if (body.classList.contains('dark-mode')) return 'dark-mode';
    if (body.classList.contains('light-mode')) return 'light-mode';
    
    const app = document.querySelector('#app');
    if (app) {
      if (app.classList.contains('dark-mode')) return 'dark-mode';
      if (app.classList.contains('light-mode')) return 'light-mode';
    }
    
    const darkModeElement = document.querySelector('.dark-mode');
    if (darkModeElement) return 'dark-mode';
    
    const lightModeElement = document.querySelector('.light-mode');
    if (lightModeElement) return 'light-mode';
    
    return '';
  };
  
  onMounted(() => {
    detectedTheme.value = detectTheme();
    
    const observer = new MutationObserver(() => {
      detectedTheme.value = detectTheme();
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: false
    });
    
    const app = document.querySelector('#app');
    if (app) {
      observer.observe(app, {
        attributes: true,
        attributeFilter: ['class'],
        subtree: false
      });
    }
    
    onBeforeUnmount(() => {
      observer.disconnect();
    });
  });
  
  watch(showModal, (isOpen) => {
    if (isOpen) {
      detectedTheme.value = detectTheme();
    }
  });
  
  const openModal = () => {
    previousActiveElement.value = document.activeElement;
    
    showModal.value = true;
    nextTick(() => {
      _manageAnimation("tv-animation-scale-up", 100);
      tvModal.value?.focus();
    });
  };
  
  const acceptModal = () => {
    _closeModal();
    emit("accepted");
  };
  
  const cancelModal = () => {
    _closeModal();
    emit("canceled");
  };

  const handleEscapeKey = () => {
    cancelModal();
  };
  
  const _closeModal = () => {
    if (!tvModal.value) return;
    
    _manageAnimation("tv-animation-scale-dw", 100);
    setTimeout(() => {
      showModal.value = false;
      if (previousActiveElement.value) {
        previousActiveElement.value.focus();
      }
    }, 100);
  };
  
  const animateModal = () => {
    if (!tvModal.value) return;
    _manageAnimation("tv-animation-rotate", 500);
  };
  
  const _manageAnimation = (animation, duration) => {
    if (!tvModal.value) {
      console.warn('TvModal: Modal element not found');
      return;
    }
    
    tvModal.value.classList.add(animation);
    setTimeout(() => {
      if (tvModal.value) {
        tvModal.value.classList.remove(animation);
      }
    }, duration);
  };

  onBeforeUnmount(() => {
    if (showModal.value && previousActiveElement.value) {
      previousActiveElement.value.focus();
    }
  });
  
  return {
    showModal,
    tvModal,
    acceptModal,
    animateModal,
    cancelModal,
    openModal,
    handleEscapeKey,
    currentTheme: detectedTheme,
  };
};

export default useModal;
