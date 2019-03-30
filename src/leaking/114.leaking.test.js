// Just adding the line below introduces the leak
const { Datastore } = require('@google-cloud/datastore')

test('leaking', () => {
    const a = 'hello'
})
