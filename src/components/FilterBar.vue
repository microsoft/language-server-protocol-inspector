<template>
  <div class="filter-bar">
    <span :class="{ active: filter === 'a' }" @click="updateFilter('a')">All</span> |
    <span :class="{ active: filter === 'w' }" @click="updateFilter('w')">Workspace</span> |
    <span :class="{ active: filter === 't' }" @click="updateFilter('t')">Text</span> |
    <span :class="{ active: filter === 'd' }" @click="updateFilter('d')">Diagnostics</span> |
    <span :class="{ active: filter === 'l' }" @click="updateFilter('l')">Language</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    filter() {
      return this.$store.state.filter
    }
  },
  methods: {
    updateFilter(filter) {
      this.$store.commit('updateFilter', filter)
    }
  }
})
</script>

<style>
.filter-bar {
  margin-bottom: 24px;
  font-family: 'Input Mono', Menlo, Monaco, 'Courier New', monospace;
}
.filter-bar span {
  transition: color 0.1s ease-in;
}
.filter-bar .active {
  color: #3eaf7c;
}
.filter-bar span:hover {
  color: #3eaf7c88;
}
</style>
