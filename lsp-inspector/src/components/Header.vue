<template>
  <div class="header">
    <div class="title">
      <h2>LSP Inspector</h2>
    </div>
    <div class="tabs">
      <div class="top-spacer"></div>
      <div class="views">
        <div class="view app-view" :class="{ active: !$store.state.showUsage }" @click="hideUsage">App</div>
        <div class="view usage-view" :class="{ active: $store.state.showUsage }" @click="showUsage">Usage</div>
        <div class="view"><a target="_blank" href="https://github.com/Microsoft/language-server-protocol-inspector">GitHub</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showUsage() {
      this.$store.commit('showUsage')
    },
    hideUsage() {
      this.$store.commit('hideUsage')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

a {
  color: $text-fg;
}

.header {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  border-bottom: 2px solid $active-bg;

  .view {
    padding: 10px;
    @include transition(background-color);
  }

  .view:hover {
    background-color: $hover-bg;
  }

  .view.active {
    background-color: $active-bg;
    color: $active-fg;
  }
}

.title {
  h2 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

.tabs {
  display: flex;
  flex-flow: column;
  .top-spacer {
    flex-grow: 2;
  }
}
.views {
  display: flex;
}

</style>
