//warm-up
// setTimeout(() => {
//     console.log('TIMED OUT!');
// }, 300);

var promise = new Promise(function(fulfill, reject) {
    setTimeout(function() {
        fulfill('FULFILLED!')
    }, 300);
});

promise.then(console.log);