import * as fs from 'fs-extra'
import * as path from 'path'
import { parseLSPLog } from '@/logParser/rawLogParser'

describe('HelloWorld', () => {
  it('parses raw log fine', async () => {
    await testFixture('helloworld')
    await testFixture('html')
    await testFixture('10-tslint-dirty-trace')
    await testFixture('11-crlf')
  })
})

async function testFixture(fixtureName: string) {
  const log = await fs.readFile(path.resolve(__dirname, `fixture/${fixtureName}.log`), 'utf-8')
  const expectedJson = await fs.readFile(
    path.resolve(__dirname, `fixture/${fixtureName}.json`),
    'utf-8'
  )
  const expected = JSON.parse(expectedJson)

  const actual = parseLSPLog(log)

  expect(actual).toEqual(expected)
}
