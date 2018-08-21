import { LspItem, MsgKind } from '@/logParser/rawLogParser'

const HEADER_LENGTH = 21

const idToRequests = {}

export function parseJSONLog(log: string): LspItem {
  const item = JSON.parse(log.slice(HEADER_LENGTH))

  if (item.message.id && item.type.startsWith('send')) {
    idToRequests[item.message.id] = item
  }

  return {
    msg: item.message.method,
    msgId: item.message.id,
    msgKind: convertMsgType(item.type) as MsgKind,
    msgType: item.message.method
      ? item.message.method
      : idToRequests[item.message.id].message.method,
    msgLatency: item.type === 'receive-response'
      ? `${item.timestamp - idToRequests[item.message.id].timestamp}ms`
      : null,
    arg: item.message,
    time: new Date(item.timestamp).toLocaleTimeString(),
  }
}

function convertMsgType(msgType: string) {
  return msgType.startsWith('receive') ? msgType.replace('receive', 'recv') : msgType
}
