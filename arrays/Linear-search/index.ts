const arr:number[] = [1,2,3,4,5,6,7,8,9];

function searchElement(arr:number[],e :number) {

    for(let i =0;i<arr.length;i++){
        if(arr[i] === e){
            return i
        }
    }
    return -1
}

searchElement(arr,5)