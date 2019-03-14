import * as fs from 'fs-extra'
import * as path from 'path'
import { parseLSPLog } from '@/logParser/rawLogParser'

describe('Raw Log Parser Tests', () => {
  testFixture('helloworld')
  testFixture('html')
  testFixture('10-tslint-dirty-trace')
  testFixture('11-crlf')
  testFixture('ids-with-guids')
})

function testFixture(fixtureName: string) {
  it(`parses ${fixtureName} logs correctly`, async () => {
    const log = await fs.readFile(path.resolve(__dirname, `fixture/${fixtureName}.log`), 'utf-8')
    const expectedJson = await fs.readFile(
      path.resolve(__dirname, `fixture/${fixtureName}.json`),
      'utf-8'
    )
    const expected = JSON.parse(expectedJson)

    const actual = parseLSPLog(log)

    expect(actual).toEqual(expected)
  })
}
