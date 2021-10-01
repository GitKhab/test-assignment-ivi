<template lang="pug">
  button.ruby-counter(@click.once="startCounter")
    span.ruby-counter__content {{ counter ? counter : 'Go!' }}
</template>

<script>
  export default {
    name: 'RubyCounter',
    data() {
      return {
        counter: 0,
        timer: null
      }
    },
    watch: {
      counter(value) {
        if (value > 3) {
          this.counter = 0
          this.stopCounter()
        }
      }
    },
    methods: {
      startCounter() {
        this.counter++
        this.timer = setInterval(() => {
          this.counter++
        }, 750)
      },
      stopCounter() {
        clearTimeout(this.timer)
      }
    }
  }
</script>

<style lang="scss">
  $ruby-width: 35vw;
  $ruby-height: 30vw;
  $ruby-font-size: 20vw;
  $ruby-clip: polygon(25% 0, 75% 0, 100% 35%, 50% 100%, 0 35%);

  .ruby-counter {
    position: relative;
    width: $ruby-width;
    height: $ruby-height;
    border: none;
    padding: 0;
    clip-path: $ruby-clip;
    font-family: $fonts-default;
    font-size: $ruby-font-size;
    color: #fff;
    background-color: $red-ivi;
    cursor: pointer;
  }

  .ruby-counter__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%)
  }
</style>
