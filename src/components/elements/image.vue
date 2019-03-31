<template>
  <img
    :src="src"
    alt=""
    v-lazy-image
    class="lazy"
  >
</template>

<script>
import "intersection-observer";
import _ from "lodash";
import blankImage from "assets/invis.png";
const lazyHandler = img => {
  if (!img.originalSrc && img.src) {
    img.originalSrc = img.src;
    img.src = blankImage;
    const io = new IntersectionObserver(
      records => {
        const e = records[0];
        if (e.isIntersecting) {
          img.src = img.originalSrc;
          io.disconnect();
        }
      },
      {
        threshold: [0]
      }
    );
    io.observe(img);
  }
};
var resetOriginalSrc = img => {
  if (img.src !== blankImage) {
    img.originalSrc = img.src;
  }
};
export default {
  name: "gb-img",
  props: {
    src: {
      type: String
    }
  },
  directives: {
    "lazy-image": {
      inserted(img) {
        lazyHandler(img);
      },
      componentUpdated(img) {
        resetOriginalSrc(img);
      }
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  background: #f1f1fa;
}
</style>
