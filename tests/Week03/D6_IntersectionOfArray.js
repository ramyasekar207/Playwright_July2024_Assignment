let arr1 = [1,2,3,4,5];
let arr2 = [3,4,5];
let result =[];
intersection(arr1,arr2);
function intersection(arr1, arr2) {
    // result = arr1.concat(arr2);
    // console.log(result);
    for(i=0;i<=arr1.length-1;i++)
    {
        for(j=0;j<=arr2.length-1;j++)
        {
            if(arr1[i]===arr2[j])
            {
                arr1.splice(i,1);
            }
        }
    }
    result = arr1.concat(arr2);
console.log(result);
}


// let month = ['Jan','Feb','Mar','Apr'];
// month.splice(1,1);
// console.log(month); 