<template>
  <transition name="log-paste-popup">
    <div class="lgp-mask" @click="close()">
      <div class="lgp-wrapper">
        <div class="lgp-container" @click.stop>
          <div class="lgp-header">
            <h1>Paste your log</h1>
          </div>
          <div class="lgp-content">
            <div>
              <input v-model="name" placeholder="Custom name"/>
              <span class="lgp-error-text" v-show="isError">Could not parse log</span>
            </div>
            <div>
              <textarea v-model="pasteText" @input="pasteTextChanged" placeholder="Your log"></textarea>
            </div>
            <div style="text-align: center">
              <input type="button" value="Paste" @click="pasteText = handlePaste()"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  },
  data() {
    return {
      name: '',
      pasteText: '',
      isError: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handlePaste(e) {
      const store = this.$store

      this.isError = false
      try {
        store.commit('addLog', {
          name: this.name || 'paste',
          rawLog: this.pasteText
        })
      } catch (e) {
        this.isError = true
        return;
      }

      this.name = ''
      this.pasteText = ''

      this.close()
    },
    pasteTextChanged() {
      const store = this.$store

      function toUnusedName(basename: string): string {
          const logNames = store.state.logs.map(log => log.name)
          let name = basename
          let i = 1
          // generate names until we find one that is not in the store
          while (logNames.includes(name)) {
            name = `${basename} (${i})`
            i++
          }
          return name
      }

      // if the user pastes his log file we try to extract the name which is the last part of the path in rootPath
      // in the following log, for example, the name would be 'language-server-test'
      /*
        [Trace - 3:55:28 PM] Sending request 'initialize - (0)'.
        Params: {
            "processId": 28444,
            "rootPath": "/home/user/workspace/language-server-test",
            "rootUri": "file:///home/user/workspace/language-server-test",

            ...
      */
      const NameSearchRegex = /"rootPath":\s*".*\/([^\"\/]+)\/?"/

      if (!this.name) {
        const match = NameSearchRegex.exec(this.pasteText)
        if (match && match[1]) {
          this.name = toUnusedName(match[1])
        }
      }
    }
  },
});
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.lgp-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.lgp-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.lgp-container {
  width: 50%;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;

  .lgp-header {
    padding: 1px 8px;
    background-color: $active-bg;

    h1 {
      font-size: 120%;
      color: #fff;
    }
  }

  .lgp-content {
    padding: 20px 30px;

    div {
      padding: 4px 0px;
    }

    .lgp-error-text {
      margin-left: 8px;
      color: red
    }

    textarea {
      width: 100%;
      height: 200px;
      padding: 3px;
    }
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
  Transition styles
*/
.log-paste-popup-enter {
  opacity: 0;
}

.log-paste-popup-leave-active {
  opacity: 0;
}

.log-paste-popup-enter .modal-container,
.log-paste-popup-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>