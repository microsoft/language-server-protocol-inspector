<template>
  <div id="app">
    <div class="inspector">
      <div class="header">
        <div class="view app-view active-view">App</div>
        <div class="view usage-view">Usage</div>
      </div>
      <div class="body">
        <side-bar></side-bar>
        <message-list></message-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import SideBar from '@/components/sidebar/SideBar.vue'
import MessageList from '@/components/MessageList.vue'

export default Vue.extend({
  components: {
    SideBar,
    MessageList
  }
})
</script>

<style src="normalize.css/normalize.css"></style>

<style lang="scss">
@import './scss/global.scss';

h1, h2, h3, h4 {
  font-weight: 500;
}
#app {
  font-family: 'Avenir Next', 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.header {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  border-bottom: 2px solid $active-bg;

  .view {
    padding: 10px;
  }

  .active-view {
    background-color: $active-bg;
  }
}

.body {
  margin-top: 20px;
  margin-bottom: 60px;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>
