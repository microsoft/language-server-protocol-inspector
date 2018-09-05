<template>
  <message-list></message-list>
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
