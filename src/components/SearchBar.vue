<template>
  <div class="search-box">
    <input v-model="query" autocomplete="off" spellcheck="false">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    query: {
      get() {
        return this.$store.state.query
      },
      set(value) {
        this.$store.commit('search', value)
      }
    }
  }
})
</script>

<style>
.search-box {
  margin-bottom: 24px;
  display: block;
  position: relative;
  margin-right: 0.5rem;
}
.search-box input {
  cursor: text;
  width: 10rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff url(https://vuepress.vuejs.org/assets/img/search.83621669.svg) 0.6rem 0.5rem
    no-repeat;
  background-size: 1rem;
}
.search-box input:focus {
  cursor: auto;
  border-color: #3eaf7c;
}
</style>
