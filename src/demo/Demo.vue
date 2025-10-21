<script setup>
import { defineAsyncComponent } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import { demos } from "./utils/mocks.js";

const TvModalDemo = defineAsyncComponent(/* webpackChunkName: "TvModalDemo" */() => import('../components/TvModalDemo.vue'))
</script>

<template>
  <tv-demo
    :component="TvModalDemo"
    :variants="demos"
    nameComponent="TvModal"
    npmInstall="@todovue/tv-modal"
    sourceLink="https://github.com/TODOvue/tv-modal"
    urlClone="https://github.com/TODOvue/tv-modal.git"
    version="1.0.0"
  ></tv-demo>
</template>

<style scoped>

</style>
