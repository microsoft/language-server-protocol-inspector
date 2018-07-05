<template>
  <div id="sidebar">
    <logs/>
    <search-by/>
    <filter-by-category/>
    <filter-by-kind/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logs from '@/components/sidebar/Logs.vue'
import SearchBy from '@/components/sidebar/SearchBy.vue'
import FilterByCategory from '@/components/sidebar/filter/FilterByCategory.vue'
import FilterByKind from '@/components/sidebar/filter/FilterByKind.vue'

export default Vue.extend({
  components: {
    Logs,
    SearchBy,
    FilterByCategory,
    FilterByKind
  }
})
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
  margin-bottom: 10px;
}
#sidebar {
  margin-right: 40px;
  text-align: left;
  font-size: 14px;
}
</style>
