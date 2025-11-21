<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from "./utils/mocks.js";

const TvModalDemo = defineAsyncComponent(/* webpackChunkName: "TvModalDemo" */() => import('../components/TvModalDemo.vue'))
</script>

<template>
  <TvDemo
    :component="TvModalDemo"
    :variants="demos"
    component-name="TvModal"
    npm-install="@todovue/tv-modal"
    source-link="https://github.com/TODOvue/tv-modal"
    url-clone="https://github.com/TODOvue/tv-modal.git"
    version="1.1.0"
  />
</template>
