<template>
  <div class="usage">
    <intro/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '@/components/Intro.vue'

export default Vue.extend({
  components: {
    Intro
  }
})

</script>

<style scoped>
.usage {
  width: 800px;
}
</style>
