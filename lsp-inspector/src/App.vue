<template>
  <div id="app">
    <div class="inspector">
      <Header></Header>
      
      <div class="body">
        <side-bar></side-bar>
        <div class="main">
          <app-view v-if="!$store.state.showUsage"/>
          <usage-view v-else/>
        </div>
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

<style src="normalize.css/normalize.css"></style>

<style lang="scss">
@import '@/scss/global.scss';

h1, h2, h3, h4 {
  font-weight: 500;
}

#app {
  font-family: 'Open Sans', 'Avenir Next', 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: $text-fg;
  margin-left: 20px;
  margin-right: 20px;
}

.inspector {
  margin-top: 10px;
}
.body {
  justify-content: center;
  display: flex;
  max-width: 1100px;

  margin-top: 20px;
  margin-bottom: 60px;

  margin-left: auto;
  margin-right: auto;
}
.main {
  flex-grow: 2;
}
</style>
