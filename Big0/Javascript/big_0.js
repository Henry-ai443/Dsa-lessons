//    0(1)  - Constant Time
function getFirstElement(arr){
    return arr[0]; // Always 1 step regardless of array size
}

//0(n) - Linear Time
function printAllItems(arr){
    arr.forEach(element => {
        console.log(element);
    });// One print per element
}

// 0(n^2) - Quadratic Time
function printAllPairs(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j ++){
            console.log(arr[i], arr[j]);
        }
    }
}

//0(log n) - Logarithmic Time (Binary search)
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) left = mid + 1;
        else right = mid -1;
    }
    return -1
}