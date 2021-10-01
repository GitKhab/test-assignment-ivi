<template lang="pug">
  Nuxt.layout.layout_default
</template>

<style lang="scss">
  @import 'assets/scss/fonts/montserrat.scss';

  html {
    height: 100%;
  }

  body {
    height: inherit;
    margin: 0;
  }

  #__nuxt {
    height: inherit;
    display: flex;
    flex-direction: column;
  }

  #__layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .layout_default {
    flex-grow: 1;
  }
</style>
