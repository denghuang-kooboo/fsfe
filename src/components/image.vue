<template>
  <img :data-src="src" alt="" class="lazy">
</template>

<script>
export default {
  name: 'gb-img',
  props: {
    src: {
      type: String
    }
  }
}
</script>


<style lang="scss" scoped>
  img {
    background: #F1F1FA;
  }
</style>
