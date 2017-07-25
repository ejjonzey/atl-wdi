//warm-up
// setTimeout(() => {
//     console.log('TIMED OUT!');
// }, 300);

//fulfill promise
// var promise = new Promise(function(fulfill, reject) {
//     setTimeout(function() {
//         fulfill('FULFILLED!')
//     }, 300);
// });

// promise.then(console.log);

//reject promise
// var promise = new Promise(function(fulfill, reject) {
//     setTimeout(function() {
//         reject(new Error("REJECTED!"))
//     }, 300);
// });

// function onReject(error) {
//     console.log(error.message);
// }
// promise.then(null, onReject);

//reject or not reject
var promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE!'));
})

function onReject(error) {
    console.log(error.message);
}
promise.then(console.log, onReject);