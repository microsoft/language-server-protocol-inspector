<template>
  <div id="app">
    <div class="inspector">
      <Header></Header>
      
      <div class="body">
        <side-bar></side-bar>
        <app-view v-if="!$store.state.showUsage"/>
        <usage-view v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/components/Header.vue'
import SideBar from '@/components/sidebar/SideBar.vue'

import AppView from '@/views/AppView.vue'
import UsageView from '@/views/UsageView.vue'

export default Vue.extend({
  components: {
    Header,
    SideBar,
    AppView,
    UsageView
  }
})
</script>

<style lang="scss" scoped>
.inspector {
  margin-top: 10px;
}
</style>
