/*

node ./duplicateTest.js

 */

const fs = require('fs')

const srcDir = './src/leaking'
const testName = 'leaking.test.js'
// const srcDir = './src/working'
// const testName = 'working.test.js'

const times = 500

main().catch(err => {
    console.error(err)
    process.exit(1)
})

async function main () {
    for (let i = 0; i < times; i++) {
        const s = fs.readFileSync(`${srcDir}/${testName}`)

        const fileName = `${srcDir}/${i}.${testName}`
        fs.writeFileSync(fileName, s)
    }
}
