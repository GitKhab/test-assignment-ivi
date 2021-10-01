<template lang="pug">
  button.ruby-counter(
    @click.once="startCounter"
    @mouseover="switchOnRubyHoverStatus"
    @mouseleave="switchOffRubyHoverStatus"
  )
    span.ruby-counter__content {{ counter ? counter : 'Go!' }}
</template>

<script>
  export default {
    name: 'RubyCounter',
    data() {
      return {
        counter: 0,
        counterLimit: 3,
        timer: null
      }
    },
    watch: {
      counter(value) {
        if (value > this.counterLimit) {
          this.resetCounter()
          this.stopCounter()
          setTimeout(this.startCounter, 3000)
        }
      }
    },
    methods: {
      increaseCounter() {
        this.counter++
      },
      resetCounter() {
        this.counter = 0
      },
      startCounter() {
        this.increaseCounter()
        this.timer = setInterval(() => {
          this.increaseCounter()
        }, 750)
      },
      stopCounter() {
        clearTimeout(this.timer)
      },
      switchOnRubyHoverStatus() {
        this.$store.commit('rubyCounter/switchOnHoverStatus')
      },
      switchOffRubyHoverStatus() {
        this.$store.commit('rubyCounter/switchOffHoverStatus')
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
    font-weight: 700;
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
