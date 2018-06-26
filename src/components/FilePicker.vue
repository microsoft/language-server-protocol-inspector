<template>
  <div class="file-picker">
    <input type="file" @change="handleFiles">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    handleFiles(e) {
      const reader = new FileReader()
      const store = this.$store
      reader.onload = () => {
        store.commit('updateLog', reader.result)
      }

      reader.readAsText(e.target.files[0])
    }
  }
})
</script>

<style>
.file-picker {
  margin-bottom: 24px;
}
</style>
