

let Promise = new Promise(function(resolve, reject) {
    let num =0;
    if(num>1)
        {
            resolve("Resolved successfully");
        }
        else
        reject("Rejected")
});

function conditionalPromise() {
}
   
Promise.then(
function() {conditionalPromise();},
function() {conditionalPromise();}
);

