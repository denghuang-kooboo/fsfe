<template>
  <div class="tile is-parent">
    <div class="tile is-child">
      <figure class="image is-1by1">
        <gb-img
          class="is-rounded"
          :src="src"
          alt=""
          @click.native="showDetail"
        />
      </figure>
    </div>
  </div>
</template>

<script>
import GbImg from "components/image";
export default {
  name: "photo-tile",
  components: {
    GbImg
  },
  props: {
    src: {
      type: String
    }
  },
  methods: {
    showDetail() {
      this.$store.dispatch("PhotoWall/showModal", this.src);
    }
  }
};
</script>


