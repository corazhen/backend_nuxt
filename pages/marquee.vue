<template>
  <div>
    <h1>456</h1>
    <!-- simple marquee text -->
    <marquee-text
      @mouseover="pause = !pause"
      @mouseenter="pause = !pause"
      :paused="pause"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna.
    </marquee-text>
  </div>
</template>
<script>
export default {
  layouts: 'front',
  name: 'Marquee',
  data() {
    return {
      pause: false,
    }
  },
}
</script>
<style scoped lang="scss"></style>
