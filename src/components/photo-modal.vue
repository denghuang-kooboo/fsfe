<template>
  <b-modal :active="isImageModalActive"
            @update:active="toggleActive">
    <p class="image is-4by3">
      <img :src="modalImageUrl">
    </p>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'photo-modal',
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleActive() {
      this.$store.dispatch('PhotoWall/closeModal')
    }
  },
  computed: {
    ...mapState('PhotoWall', ['isImageModalActive', 'modalImageUrl'])
  }
}
</script>

