
# Jest + Datastore memory leak

## Working test

`src/working/working.test.js` is the minimal example *without* Datastore library.

Test is duplicated 500 times and ran with flags `--maxWorkers=1 --logHeapUsage --detectOpenHandles --detectLeaks`
to log heap usage and detect leaks.

`log_working.txt` shows that it does not leak - memory usage stays consistent.

## Leaking test

By require'ing [@google-cloud/datastore](https://github.com/googleapis/nodejs-datastore) package (just doing `require`,
nothing else) - it leaks memory.

`src/leaking/leaking.test.js` illustrates that.

Duplicated 500 times.

When ran with flags `--maxWorkers=1 --logHeapUsage --detectOpenHandles` it shows increasing memory usage. Some garbage
collection happens on they way, but not all memory is freed.

`log_leaking.txt` shows that. With 500 tests it ends with ~1800Mb memory, or ~30Mb not freed memory per 1 test.

When ran with additional flag `--detectLeaks` - Jest reports leakage (confirming the log).
