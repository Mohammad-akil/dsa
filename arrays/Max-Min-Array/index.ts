const arr = [1, 2, 3, -10, -100];

function getMaxMin(arr:number[]){
    let smallestNum = Number.NEGATIVE_INFINITY;
    let  largestNum = Number.POSITIVE_INFINITY;

    for(let i=0;i<arr.length;i++){
        
        smallestNum = Math.min(smallestNum,arr[i]);
        largestNum = Math.max(largestNum,arr[i]);

    }

    console.log("Smallest Number ==> ",smallestNum);
    console.log("Largest Number ==> ",largestNum)


}

getMaxMin(arr)