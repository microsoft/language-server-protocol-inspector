<template>
  <div id="sidebar">
    <div>
      <h2>Search</h2>
        <div class="search-box">
          <input v-model="query" autocomplete="off" spellcheck="false" placeholder="Message Name">
        </div>
        <!-- <div class="search-box">
          <input v-model="query" autocomplete="off" spellcheck="false" placeholder="Message Parameters">
        </div> -->
    </div>
    <div>
      <h2>Filter By</h2>
      <div class="group general">
        <h3>General</h3>
        <div class="methods">
          <div>initialize</div>
          <div>initialized</div>
          <div>shutdown</div>
          <div>exit</div>
          <div>$/cancelRequest</div>
        </div>
      </div>

      <div class="group window">
        <h3>Window</h3>
        <div class="methods">
          <div>showMessage</div>
          <div>showMessageRequest</div>
          <div>logMessage</div>
        </div>
      </div>

      <div class="group telemetry">
        <h3>Event</h3>
        <div class="methods">
          <div>event</div>
        </div>
      </div>

      <div class="group client">
        <h3>Client</h3>
        <div class="methods">
          <div>registerCapability</div>
          <div>unregisterCapability</div>
        </div>
      </div>

      <div class="group workspace">
        <h3>Workspace</h3>
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
        <h3>Text Synchronization</h3>
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
        <h3>Diagnostics</h3>
        <div class="methods">
          <div>publishDiagnostics</div>
        </div>
      </div>

      <div class="group language-features">
        <h3>Language Features</h3>
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
  </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
h3 {
  margin: 0;
  margin-bottom: 10px;
}
#sidebar {
  margin-right: 80px;
  text-align: left;
  font-size: 14px;
}
.group {
  padding: 4px 4px 4px 0;
  transition: all 0.5s ease-in;
}
.group .methods {
  max-height: 0px;
  transition: max-height 0.55s ease-in-out;
  overflow: hidden;
}
.group:hover .methods {
  max-height: 400px;
  transition: max-height 0.55s ease-in-out;
}
.group:hover h3 {
  border-radius: 4px;
  background-color: rgba(221, 221, 221, 0.3);
}
</style>
