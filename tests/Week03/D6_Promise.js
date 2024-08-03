
let conditionalPromise = new Promise((resolve, reject) => {
    let random = Math.random();
    if(random > 0.5){
        resolve('Resolved successfully. ' + random)
    }else{
        reject('Rejected ' + random)
    }


}).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
})
// let Promise = new Promise(function(resolve, reject) {
//     let num =0;
//     if(num>1)
//         {
//             resolve("Resolved successfully");
//         }
//         else
//         reject("Rejected")
// });

// function conditionalPromise() {
// }
   
// Promise.then(
// function() {conditionalPromise();},
// function() {conditionalPromise();}
// );

