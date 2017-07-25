'use strict'
//WARM-UP
// setTimeout(() => {
//     console.log('TIMED OUT!');
// }, 300);

//FULFILL PROMISE
// var promise = new Promise(function(fulfill, reject) {
//     setTimeout(function() {
//         fulfill('FULFILLED!')
//     }, 300);
// });

// promise.then(console.log);

//REJECT PROMISE
// var promise = new Promise(function(fulfill, reject) {
//     setTimeout(function() {
//         reject(new Error("REJECTED!"))
//     }, 300);
// });

// function onReject(error) {
//     console.log(error.message);
// }
// promise.then(null, onReject);

//REJECT OR NOT REJECT
// var promise = new Promise((fulfill, reject) => {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE!'));
// })

// function onReject(error) {
//     console.log(error.message);
// }
// promise.then(console.log, onReject);

//ALWAYS ASYNC
// var promise = new Promise((fulfill, reject) => {
//     fulfill("PROMISE VALUE");
// })
// promise.then(console.log);
// console.log("MAIN PROGRAM");

//SHORTCUTS: .CATCH
// var promise = new Promise((fulfill, reject) => {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE!'));
// })

// function onReject(error) {
//     //console.log(error.message);
// }
// promise.catch((err) => {
//     console.log('I DID NOT FIRE!');
//     console.log(err.message);
// });
// //: .RESOLVE
// var promise = Promise.resolve('SECRET VALUE');

// //: .REJECT
// var promise = Promise.reject('SECRET VALUE');

//PROMISE AFTER PROMISE
// var firstPromise = first();

// var secondPromise = firstPromise.then((value) => {
//     return second(value);
// })
// secondPromise.then(console.log);

//VALUES AND PROMISES
function attachTitle(name) {
    return 'DR. ' + name;
}
Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);