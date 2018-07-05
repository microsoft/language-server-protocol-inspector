<template>
  <div>
    <message-list></message-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/components/Header.vue'
import SideBar from '@/components/sidebar/SideBar.vue'
import MessageList from '@/components/message/MessageList.vue'

export default Vue.extend({
  components: {
    Header,
    SideBar,
    MessageList
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
  font-family: 'Avenir Next', 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: $text-fg;
}

.body {
  margin-top: 20px;
  margin-bottom: 60px;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>
