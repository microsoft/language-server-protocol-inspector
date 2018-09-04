<template>
  <div>
    <h2>Search By</h2>
    <div class="search-box">
      <input v-model="nameQuery" autocomplete="off" spellcheck="false" placeholder="Message Name">
    </div>
    <div class="search-box">
      <input v-model="paramQuery" autocomplete="off" spellcheck="false" placeholder="Message Parameters">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    nameQuery: {
      get() {
        return this.$store.state.nameQuery
      },
      set(value) {
        this.$store.commit('search', {
          nameQuery: value,
          paramQuery: this.paramQuery
        })
      }
    },
    paramQuery: {
      get() {
        return this.$store.state.query
      },
      set(value) {
        this.$store.commit('search', {
          nameQuery: this.nameQuery,
          paramQuery: value
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

h2 {
  margin-top: 1.5rem;
  font-size: 1.5rem;
}

.search-box {
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
}
.search-box input {
  cursor: text;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 4px;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff url(~@/assets/search.svg) 0.6rem 0.5rem
    no-repeat;
  background-size: 1rem;
}
.search-box input:focus {
  cursor: auto;
  border-color: $active-bg;
}
</style>
