import type { App, Plugin } from 'vue'
import _TvModal from './components/TvModal.vue'
import './style.scss'

const TvModal = _TvModal as typeof _TvModal & Plugin;
TvModal.install = (app: App) => {
  app.component('TvModal', TvModal)
};

export { TvModal }

export const TvModalPlugin: Plugin = {
  install: TvModal.install
};
export default TvModal;

declare module 'vue' {
  export interface GlobalComponents {
    TvModal: typeof TvModal;
  }
}
