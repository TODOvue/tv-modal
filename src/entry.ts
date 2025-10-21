import TvModal from './components/TvModal.vue'

(TvModal as any).install = (app: any) => {
  app.component('TvModal', TvModal)
};

export const TvModalPlugin = {
  install(app: any) {
    app.component('TvModal', TvModal)
  }
}

export { TvModal }
export default TvModal
