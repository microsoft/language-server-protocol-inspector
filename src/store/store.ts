import Vue from 'vue'
import Vuex from 'vuex'
import { parseLSPLog, LspItem, MsgKind } from '@/logParser/rawLogParser'
import { parseJSONLog } from '@/logParser/jsonLogParser';

Vue.use(Vuex)

export type CategoryFilter =
  | 'all'
  | 'general'
  | 'window'
  | 'telemetry'
  | 'client'
  | 'workspace'
  | 'text-synchronization'
  | 'diagnostics'
  | 'language-features'

export type KindFilter = 'all' | MsgKind

export interface Log {
  name: string
  items: LspItem[]
}
export interface State {
  logs: Log[]
  activeLogIndex: number

  nameQuery: string
  paramQuery: string

  query: string
  categoryFilter: CategoryFilter
  kindFilter: KindFilter
  current: number

  showUsage: boolean
}

const emptyLog = {
  name: 'stream',
  items: []
}

const sampleLogItems: LspItem[] = require('./sample.log.json')
const sampleLog = {
  name: 'sample.log',
  items: sampleLogItems
}

const sampleCSSLogItems = require('./css.log.json')
const sampleCSSLog = {
  name: 'css.log',
  items: sampleCSSLogItems
}

const defaultState: State = {
  logs: [emptyLog, sampleLog, sampleCSSLog],
  activeLogIndex: 0,

  nameQuery: '',
  paramQuery: '',

  query: '',
  categoryFilter: 'all',
  kindFilter: 'all',
  current: -1,

  showUsage: false
}

const store = new Vuex.Store({
  state: defaultState,
  mutations: {
    updateActiveLog(state, i) {
      state.activeLogIndex = i
    },
    addLog(state, { name, rawLog }) {
      state.logs.push({
        items: parseLSPLog(rawLog),
        name
      })
    },
    appendLog(state, logItem: string) {
      const activeLog = state.logs[state.activeLogIndex]
      activeLog.items.push(parseJSONLog(logItem))
    },
    search(state, { nameQuery, paramQuery }) {
      state.nameQuery = nameQuery
      state.paramQuery = paramQuery
    },
    updateCategoryFilter(state, filter) {
      state.categoryFilter = filter
    },
    updateKindFilter(state, filter) {
      state.kindFilter = filter
    },
    updateCurrent(state, current) {
      state.current = current
    },
    showUsage(state) {
      state.showUsage = true
    },
    hideUsage(state) {
      state.showUsage = false
    }
  },
  actions: {},
  getters: {
    activeLog(state) {
      return state.logs[state.activeLogIndex]
    },
    shownItems(state, getters) {
      return getters.activeLog.items.filter(item => {
        return itemShouldShow(
          item,
          state.nameQuery,
          state.paramQuery,
          state.categoryFilter,
          state.kindFilter
        )
      })
    }
  }
})

function itemShouldShow(
  item: LspItem,
  nameQuery: string,
  paramQuery: string,
  categoryFilter: CategoryFilter,
  kindFilter: KindFilter
) {
  return (
    itemMatchesQuery(item, nameQuery, paramQuery) &&
    itemMatchesCategoryFilter(item, categoryFilter) &&
    itemMatchesKindFilter(item, kindFilter)
  )
}

function itemMatchesQuery(item: LspItem, nameQuery: string, paramQuery: string) {
  if (nameQuery === '' && paramQuery === '') {
    return true
  }

  if (paramQuery === '') {
    return item.msgType.toLowerCase().includes(nameQuery.toLowerCase())
  }

  const argsJSON = JSON.stringify(item.arg)
  if (nameQuery === '') {
    return argsJSON.toLowerCase().includes(paramQuery.toLowerCase())
  }

  return (
    item.msgType.toLowerCase().includes(nameQuery.toLowerCase()) &&
    argsJSON.toLowerCase().includes(paramQuery.toLowerCase())
  )
}

function itemMatchesCategoryFilter(item: LspItem, filter: CategoryFilter) {
  const msgTypeMap: { [key in CategoryFilter]: string[] } = {
    all: [],
    general: ['initialize', 'initialized', 'shutdown', 'exit', '$/cancelRequest'],
    window: ['window/showMessage', 'window/showMessageRequest', 'window/logMessage'],
    telemetry: ['telemetry/event'],
    client: ['client/registerCapability', 'client/unregisterCapability'],
    workspace: [
      'workspace/workspaceFolders',
      'workspace/didChangeWorkspaceFolders',
      'workspace/didChangeConfiguration',
      'workspace/configuration',
      'workspace/didChangeWatchedFiles',
      'workspace/symbol',
      'workspace/executeCommand',
      'workspace/applyEdit'
    ],
    'text-synchronization': [
      'textDocument/didOpen',
      'textDocument/didChange',
      'textDocument/willSave',
      'textDocument/willSaveWaitUntil',
      'textDocument/didSave',
      'textDocument/didClose'
    ],
    diagnostics: ['textDocument/publishDiagnostics'],
    'language-features': [
      'textDocument/completion',
      'completionItem/resolve',
      'textDocument/hover',
      'textDocument/signatureHelp',
      'textDocument/definition',
      'textDocument/typeDefinition',
      'textDocument/implementation',
      'textDocument/references',
      'textDocument/documentHighlight',
      'textDocument/documentSymbol',
      'textDocument/codeAction',
      'textDocument/codeLens',
      'codeLens/resolve',
      'textDocument/documentLink',
      'documentLink/resolve',
      'textDocument/documentColor',
      'textDocument/colorPresentation',
      'textDocument/formatting',
      'textDocument/rangeFormatting',
      'textDocument/onTypeFormatting',
      'textDocument/rename'
    ]
  }

  if (filter === 'all') {
    return true
  }

  return msgTypeMap[filter].includes(item.msgType)
}

function itemMatchesKindFilter(item: LspItem, filter: KindFilter) {
  if (filter === 'all') {
    return true
  }
  return item.msgKind === filter
}

(window as any).appendLog = (log) => {
  store.commit('appendLog', log)
}

export default store
