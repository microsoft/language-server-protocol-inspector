<template>
  <div>
    <div class="msg-header">
      <span>Client</span>
      <span>Server</span>
    </div>
    <div class="msg-list">
      <message v-for="(item, i) in this.log" :key="i" :item="item"></message>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Message from '@/components/message/Message.vue'

export default Vue.extend({
  components: {
    Message
  },
  computed: {
    log() {
      return this.$store.getters.shownItems
    }
  }
})
</script>

<style lang="scss">
.msg-header,
.msg-list {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.msg-header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 40px;
  font-size: 2rem;
}
.msg-list {
  display: flex;
  flex-flow: column;
}
</style>
