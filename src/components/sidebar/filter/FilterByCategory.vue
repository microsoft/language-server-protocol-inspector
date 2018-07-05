<template>
  <div>
    <h2>Filter By Category</h2>

    <div class="categories">
      <category-filter :category="'all'"></category-filter>
      <category-filter :category="'general'"></category-filter>
      <category-filter :category="'window'"></category-filter>
      <category-filter :category="'telemetry'"></category-filter>
      <category-filter :category="'client'"></category-filter>
      <category-filter :category="'workspace'"></category-filter>
      <category-filter :category="'text-synchronization'"></category-filter>
      <category-filter :category="'diagnostics'"></category-filter>
      <category-filter :category="'language-features'"></category-filter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryFilter from '@/components/sidebar/filter/CategoryFilter.vue'

export default Vue.extend({
  components: {
    CategoryFilter
  }
})
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1.5rem;
  font-size: 1.5rem;
}
.categories {
  cursor: pointer;
}
</style>
