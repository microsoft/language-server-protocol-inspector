<template>
  <div>
    <h2>Logs</h2>
    <div class="active">
      <font-awesome-icon class="fa-icon" icon="file" /> sample.log
    </div>
    <div class="filepicker">
      <label for="file">
        <font-awesome-icon class="fa-icon" icon="upload" /> Upload your log
      </label>
      <input type="file" id="file" @change="handleFiles">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default Vue.extend({
  components: {
    FontAwesomeIcon
  },
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

<style lang="scss" scoped>
@import '@/scss/global.scss';

h2 {
  margin-top: 0;
}
.active {
  padding: 4px 10px;
  background-color: $active-bg;
}
.filepicker {
  margin-top: 4px;
  label {
    display: block;
    padding: 4px 10px;
    @include transition(background-color);
  }

  &:hover {
    label {
      background-color: $active-bg;
    }
  }
}
input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.fa-icon {
  width: 12px;
  margin-right: 4px;
}
</style>
