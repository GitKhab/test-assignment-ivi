<template>
  <div class="error">
    <div class="error__inner">
      <h1 class="error__title" v-if="error.statusCode === 404">Упс, такой страницы нет</h1>
      <h1 class="error__title" v-else>Упс, произошла какая-то ошибка</h1>
      <NuxtLink class="error__link" to="/">На главную</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    props: {
      error: {
        type: Object,
        required: true
      }
    },
    head: {
      title: 'Ошибка'
    }
  }
</script>

<style lang="scss">
  .error {
    box-sizing: border-box;
    display: flex;
    min-width: 320px;
    padding: 24px;
    font-family: $fonts-default;
    text-align: center;
  }

  .error__inner {
    margin: auto;
  }

  .error__link {
    padding: 12px;
    color: #000;
    &:hover {
      text-decoration: none;
    }
  }
</style>
