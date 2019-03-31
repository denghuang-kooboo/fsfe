<template>
  <b-modal :active="isImageModalActive"
            @update:active="toggleActive">
    <p class="image is-4by3">
      <gb-img :src="modalImageUrl"></gb-img>
    </p>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import GbImg from "components/elements/image";
export default {
  components: {
    GbImg
  },
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

