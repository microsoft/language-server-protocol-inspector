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
@import '@/scss/global.scss';

.msg-header,
.msg-list {
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
  height: calc(100vh - 300px);
  padding-top: 20px;
  overflow: scroll;
  border-top: 2px solid $active-bg;
  border-bottom: 2px solid $active-bg;
}
</style>
