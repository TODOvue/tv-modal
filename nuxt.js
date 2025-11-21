import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-modal',
    configKey: 'tvModal'
  },
  setup(_options, nuxt) {
    const modalCss = '@todovue/tv-modal/style.css';
    const buttonCss = '@todovue/tv-button/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    pushUnique(modalCss);
    pushUnique(buttonCss);
  }
})
