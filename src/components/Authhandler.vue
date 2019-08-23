<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:'Authhandler',

methods: {
    ...mapActions(['finalizeLogin']),
  },
  created(){
    this.finalizeLogin(window.location.hash)
  },
}
</script>