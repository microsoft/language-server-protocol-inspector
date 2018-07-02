<template>
  <div class="inspector">
    <!-- <file-picker></file-picker>
    <filter-bar></filter-bar>
    <search-bar></search-bar> -->
    <side-bar></side-bar>
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
import SideBar from '@/components/SideBar.vue'

export default Vue.extend({
  name: 'inspector',
  components: {
    Intro,
    FilePicker,
    MessageList,
    FilterBar,
    SearchBar,
    SideBar
  }
})
</script>

<style>
.inspector {
  margin-bottom: 60px;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>
