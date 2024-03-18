<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Woman />
  </div>
</template>

<script>
// @ is an alias to /src
import Woman from '@/components/Woman.vue'

export default {
  name: 'WomanView',
  components: {
    Woman
  }
}
</script>
