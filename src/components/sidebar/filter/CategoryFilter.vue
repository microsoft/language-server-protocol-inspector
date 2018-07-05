<template>
  <div class="category-container" :class="category">
    <div class="category" :class="{ active: isActive }" @click="updateCategoryFilter">{{ displayCategory }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default Vue.extend({
  components: {
    FontAwesomeIcon
  },
  props: ['category'],
  computed: {
    isActive() {
      return this.category === this.$store.state.categoryFilter
    },
    displayCategory() {
      return this.category[0].toUpperCase() + this.category.slice(1)
    }
  },
  methods: {
    updateCategoryFilter() {
      this.$store.commit('updateCategoryFilter', this.category)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.category-container {
  padding: 4px 4px 4px 0;
}
.category {
  padding: 6px 10px;
  @include transition(background-color);

  &:hover {
    background-color: $hover-bg;
  }

  &.active {
    color: $active-fg;
    background-color: $active-bg;
  }
}
</style>