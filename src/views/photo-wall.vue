<template>
  <div class="container">
    <div class="tile is-ancestor is-vertical">
      <div
        class="tile is-horizontal"
        v-for="(column, index) in shownPhotoList"
        :key="index"
      >
      <template  v-for="(item, itemIndex) in column">
        <photo-tile
        v-if="item"
          :key="itemIndex"
          :src="item.src"
        ></photo-tile>
        <template v-else>
          <div class="tile" :key="itemIndex"></div>
        </template>
      </template>
      </div>
    </div>
    <photo-modal></photo-modal>
  </div>
</template>

<script>
import PhotoTile from "components/photo-tile";
import PhotoModal from "components/photo-modal";
import ImageLazyLoad from "@/utilities/image-lazy-load";
import _ from "lodash";
export default {
  name: "photo-wall",
  mixins: [ImageLazyLoad],
  components: {
    PhotoTile,
    PhotoModal
  },
  data() {
    return {
      photoList: [
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "http://img7n2.graphmovie.com/movies/13489/gm_0.jpeg"
        },
        {
          src: "https://p1.ssl.qhimgs1.com/sdr/200_200_/t01a9f7f11254e3cffd.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        },
        {
          src: "https://p.ssl.qhimg.com/dmfd/400_300_/t0132845b0e841ac776.jpg"
        }
      ]
    };
  },
  computed: {
    shownPhotoList() {
      let result = [];
      let columnList = [];
      _.forEach(this.photoList, (photo, index) => {
        columnList.push(photo);
        if ((index + 1) % 3 === 0) {
          result.push(columnList);
          columnList = [];
        }
      });

      if (columnList.length) {
        columnList.length = 3
        result.push(columnList)
      }

      return result;
    }
  }
};
</script>

