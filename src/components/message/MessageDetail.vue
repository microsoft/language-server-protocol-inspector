<template>
  <div class="msg-detail">
    <b>
      <a :href="msgLink" target="_blank">
        {{ this.item.msgType }}
      </a>
    </b>
    <pre>
      <code>{{ JSON.stringify(item.arg, null, 2) }}</code>
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['item'],
  computed: {
    msgLink() {
      const hash = this.item.msgType.split('/').join('_')
      return `https://microsoft.github.io/language-server-protocol/specification#${
        hash
      }`
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.msg-detail {
  border: 1px solid #eee;
  padding: 20px;
  font-size: 14px;
  text-align: left;

  b a {
    color: inherit;
  }
}

pre {
  text-align: left;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;

  white-space: normal;
  text-align: left;
  overflow: auto;
  overflow-wrap: break-word;
  border-radius: 6px;
}
code {
  white-space: pre-wrap;
  font-family: $monospace;
  font-size: 14px;
  border-radius: 2px;
  padding: 0.2rem 0.3rem;
}
</style>
