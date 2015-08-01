'use strict';

var data = '{"id": 123, "firstName": "John", "lastName": "Papa"}';

for (var i = 0, l = 22; i < l; i++) {
    data += data;
}

var start = Date.now();

console.log(data);

console.log('wrote %d bytes in %dms', data.length, Date.now() - start);

process.on('exit', function() {
    console.log('exited');
    console.log('Total processing time: ' + (Date.now() - start) + 'ms.');
});

process.on('error', function() {
    console.log('err');
});