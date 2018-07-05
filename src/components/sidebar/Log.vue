<template>
  <div class="log" :class="{ active: isActive }" @click="updateActiveLog">
    <font-awesome-icon class="fa-icon" icon="file" />{{ name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default Vue.extend({
  components: {
    FontAwesomeIcon
  },
  props: ['index'],
  computed: {
    name () {
      return this.$store.state.logs[this.index].name
    },
    isActive () {
      return this.index === this.$store.state.activeLogIndex
    }
  },
  methods: {
    updateActiveLog() {
      this.$store.commit('updateActiveLog', this.index)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.log {
  padding: 8px 10px;
  margin-bottom: 6px;

  .fa-icon {
    width: 12px;
    margin-right: 8px;
  }
}

.log:hover {
  background-color: $hover-bg;
}
.log.active {
  color: $active-fg;
  background-color: $active-bg;
}
</style>
