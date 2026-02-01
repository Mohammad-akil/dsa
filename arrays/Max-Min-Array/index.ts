const arr = [1, 2, 3, -10, -100];

function getMaxMin(arr:number[]){
    let smallestNum = Number.POSITIVE_INFINITY;
    let largestNum = Number.NEGATIVE_INFINITY;

    for(let i=0;i<arr.length;i++){
        
        smallestNum = Math.max(smallestNum,arr[i]);
        largestNum = Math.max(largestNum,arr[i]);

    }

    console.log("Smallest Number ==> ",smallestNum);
    console.log("Largest Number ==> ",largestNum)


}

getMaxMin(arr)


// get min max indexes 


function getMaxMinIndex(arr:number[]){
    let smallestNumIdx = -1;
    let largestNumIdx = -1;


     let smallestNum = Number.POSITIVE_INFINITY;
    let largestNum = Number.NEGATIVE_INFINITY;

    for(let i=0;i<arr.length;i++){
        
          smallestNum = Math.max(smallestNum,arr[i]);
        largestNum = Math.max(largestNum,arr[i]);

        smallestNumIdx = arr.indexOf( smallestNum);
        largestNumIdx =arr.indexOf( largestNum);

    }

    console.log("Smallest Number smallestNumIdx ==> ",smallestNumIdx);
    console.log("Largest Number largestNumIdx ==> ",largestNumIdx)


}

getMaxMinIndex(arr)