<template>
  <div class="inspector">
    <file-picker></file-picker>
    <filter-bar></filter-bar>
    <search-bar></search-bar>
    <message-list></message-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from '@/components/Intro.vue'
import FilePicker from '@/components/FilePicker.vue'
import FilterBar from '@/components/FilterBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import MessageList from '@/components/MessageList.vue'

export default Vue.extend({
  name: 'inspector',
  components: {
    Intro,
    FilePicker,
    MessageList,
    FilterBar,
    SearchBar
  }
})
</script>

<style>
.inspector {
  margin-bottom: 60px;
}
</style>
