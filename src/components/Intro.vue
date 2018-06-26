<template>
  <div class="intro">
    Welcome to LSP Inspector. Here you can:
    <ul>
      <li>Visualize lengthy LSP logs so it's easier to understand the communication between Language Server/Client</li>
      <li>Expand messages to look deeper into the parameters</li>
      <li>Filter the messages by area, type or message name</li>
    </ul>

    <h3>Usage</h3>
    Language Servers implemented with <a href="https://github.com/Microsoft/vscode-languageserver-node">vscode-languageserver-node</a>
    has an option `[langId].trace.server`. When you set it to `"verbose"`, logs will be printed to the `[langeId]` output channel. Here is
    an example of loading CSS language server traces:
    <ul>
      <li>In VS Code, set `css.trace.server: "verbose"`</li>
      <li>Open a CSS file, and do some edits, formatting, hovering to trigger language features.</li>
      <li>Go to Output -> CSS Language Server. Select all output and save them into a log file css.log.</li>
      <li>In the inspector, use the file picker to load the log file.</li>
    </ul>

    <h3>Message Type</h3>
    There are 6 types of message communications between the language client/server:
    <ul>
      <li>
        <font-awesome-icon class="fa-icon" icon="comment-alt" style="color: #bb9911de" />
        Notification: Client -> Server
      </li>
      <li>
        <font-awesome-icon class="fa-icon" icon="comment-alt" style="color: #bb9911de" transform="flip-h" />
        Notification: Server -> Client
      </li>
      <li>
        <font-awesome-icon class="fa-icon" icon="comment" style="color: #1c791cbd" />
        Request: Client -> Server
      </li>
      <li>
        <font-awesome-icon class="fa-icon" icon="comment" style="color: #1c791cbd" transform="flip-h" />
        Response: Server -> Client
      </li>
      <li>
        <font-awesome-icon class="fa-icon" icon="comment" style="color: #356fa5f7" transform="flip-h" />
        Request: Server -> Client
      </li>
      <li>
        <font-awesome-icon class="fa-icon" icon="comment" style="color: #356fa5f7" />
        Response: Client -> Server
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default Vue.extend({
  components: {
    FontAwesomeIcon
  }
})
</script>

<style>
.intro {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>
