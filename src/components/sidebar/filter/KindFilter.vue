<template>
  <div class="kind-container" :class="[{ active: isActive }, kind]">
    <div class="kind" @click="updateKindFilter">
      <font-awesome-icon class="fa-icon" :icon="faIcon" :transform="faTransform" />
      {{ displayKind }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default Vue.extend({
  components: {
    FontAwesomeIcon
  },
  props: ['kind'],
  computed: {
    isActive() {
      return this.kind === this.$store.state.kindFilter
    },
    displayKind() {
      return {
        'all': 'All',
        'send-notification': 'Notification to Server',
        'recv-notification': 'Notification from Server',
        'send-request': 'Request to Server',
        'recv-request': 'Request from Server',
        'send-response': 'Response to Server',
        'recv-response': 'Response from Server',
      }[this.kind]
    },
    faIcon() {
      if (this.kind === 'all') {
        return 'globe'
      } else if (this.kind.includes('notification')) {
        return 'comment-alt'
      } else {
        return 'comment'
      }
    },
    faTransform() {
      return this.kind.includes('recv')
        ? 'flip-h'
        : ''
    }
  },
  methods: {
    updateKindFilter() {
      this.$store.commit('updateKindFilter', this.kind)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.kind-container {
  padding: 8px 10px;
  margin-bottom: 6px;

  @include transition(background-color);

  &:hover {
    background-color: $hover-bg;
  }

  &.active {
    color: $active-fg;
    background-color: $active-bg;
  }
}

.kind {
  .fa-icon {
    width: 12px;
    margin-right: 8px;
  }
}

.send-request svg,
.recv-response svg {
  color: #1c791cbd;
}
.send-notification svg,
.recv-notification svg{
  color: #bb9911de;
}
.recv-request svg,
.send-response svg{
  color: #356fa5f7;
}
</style>