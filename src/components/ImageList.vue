<template>
  <div>
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="image in allImages" :src="image.link" :key="image.id"/>
    </div>
    <h2 v-else> Please login to get started! </h2>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created(){
    this.fetchImages();
  }
}
</script>
<style scoped>
  .image-container{
    column-count: 3;
    column-gap: 0;
  }
  img{
    max-width: 100%;
    padding: 5px;
  }
</style>