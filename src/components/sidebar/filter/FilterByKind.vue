<template>
  <div>
    <h2>Filter By Kind</h2>

    <kind-filter :kind="'all'"></kind-filter>
    <kind-filter :kind="'send-notification'"></kind-filter>
    <kind-filter :kind="'recv-notification'"></kind-filter>
    <kind-filter :kind="'send-request'"></kind-filter>
    <kind-filter :kind="'recv-response'"></kind-filter>
    <kind-filter :kind="'recv-request'"></kind-filter>
    <kind-filter :kind="'send-response'"></kind-filter>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import KindFilter from '@/components/sidebar/filter/KindFilter.vue'

export default Vue.extend({
  components: {
    FontAwesomeIcon,
    KindFilter
  }
})
</script>