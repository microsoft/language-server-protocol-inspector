<template>
  <div>
    <h2>Filter By</h2>
    <div class="group general">
      <div class="category">General</div>
      <div class="methods">
        <div>initialize</div>
        <div>initialized</div>
        <div>shutdown</div>
        <div>exit</div>
        <div>$/cancelRequest</div>
      </div>
    </div>

    <div class="group window">
      <div class="category">Window</div>
      <div class="methods">
        <div>showMessage</div>
        <div>showMessageRequest</div>
        <div>logMessage</div>
      </div>
    </div>

    <div class="group telemetry">
      <div class="category">Event</div>
      <div class="methods">
        <div>event</div>
      </div>
    </div>

    <div class="group client">
      <div class="category">Client</div>
      <div class="methods">
        <div>registerCapability</div>
        <div>unregisterCapability</div>
      </div>
    </div>

    <div class="group workspace">
      <div class="category">Workspace</div>
      <div class="methods">
        <div>workspaceFolders</div>
        <div>didChangeWorkspaceFolders</div>
        <div>didChangeConfiguration</div>
        <div>configuration</div>
        <div>didChangeWatchedFiles</div>
        <div>symbol</div>
        <div>executeCommand</div>
        <div>applyEdit</div>
      </div>
    </div>

    <div class="group text-synchronization">
      <div class="category">Text Synchronization</div>
      <div class="methods">
        <div>didOpen</div>
        <div>didChange</div>
        <div>willSave</div>
        <div>willSaveWaitUntil</div>
        <div>didSave</div>
        <div>didClose</div>
      </div>
    </div>

    <div class="group diagnostics">
      <div class="category">Diagnostics</div>
      <div class="methods">
        <div>publishDiagnostics</div>
      </div>
    </div>

    <div class="group language-features">
      <div class="category">Language Features</div>
      <div class="methods">
        <div>completion</div>
        <div>completion resolve</div>
        <div>hover</div>
        <div>signatureHelp</div>
        <div>definition</div>
        <div>typeDefinition</div>
        <div>implementation</div>
        <div>references</div>
        <div>documentHighlight</div>
        <div>documentSymbol</div>
        <div>codeAction</div>
        <div>codeLens</div>
        <div>codeLens resolve</div>
        <div>documentLink</div>
        <div>documentLink resolve</div>
        <div>documentColor</div>
        <div>colorPresentation</div>
        <div>formatting</div>
        <div>rangeFormatting</div>
        <div>onTypeFormatting</div>
        <div>rename</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    filter() {
      return this.$store.state.filter
    }
  },
  methods: {
    updateFilter(filter) {
      this.$store.commit('updateFilter', filter)
    }
  }
})
</script>

<style>
.group {
  padding: 4px 4px 4px 0;
}
.group .methods {
  display: none;
}
</style>
