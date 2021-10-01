<template lang="pug">
  div.home(:class="dynamicHomeStyles")
    RubyCounter.home__ruby-counter
</template>

<script>
  export default {
    head: {
      title: 'Главная',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Устройте кинотеатр у себя дома! Нажмите на рубин и... порекомендуйте меня в it-команду ivi.ru'
        }
      ]
    },
    computed: {
      rubyHovered() {
        return this.$store.state.rubyCounter.hover
      },
      dynamicHomeStyles() {
        return {
          home_theme_dark: this.rubyHovered
        }
      }
    }
  }
</script>

<style lang="scss">
  .home {
    display: flex;
    padding: 24px 16px;
  }

  .home_theme_dark {
    background-color: $purple-ivi;
  }

  .home__ruby-counter {
    margin: auto;
  }
</style>
