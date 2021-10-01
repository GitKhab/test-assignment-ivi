<template lang="pug">
  div.home
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
    }
  }
</script>

<style lang="scss">
  .home {
    display: flex;
    padding: 24px 16px;
  }

  .home__ruby-counter {
    margin: auto;
  }
</style>
