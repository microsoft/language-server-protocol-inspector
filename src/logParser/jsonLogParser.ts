import { LspItem, MsgKind } from '@/logParser/rawLogParser'

const HEADER_LENGTH = 21

export function parseJSONLog(log: string): LspItem {
  const item = JSON.parse(log.slice(HEADER_LENGTH))

  return {
    msg: item.message.method,
    msgId: item.message.id,
    msgKind: convertMsgType(item.type) as MsgKind,
    msgType: convertMsgType(item.type),
    arg: item.message,
    time: item.timestamp
  }
}

function convertMsgType(msgType: string) {
  return msgType.startsWith('receive') ? msgType.replace('receive', 'recv') : msgType
}
