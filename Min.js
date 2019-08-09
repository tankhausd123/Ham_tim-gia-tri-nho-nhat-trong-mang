function minArr(arr) {
    if (arr.length == 0){
        return -1
    }
    let min = arr[0];
    let localMin = 0;
    for (let i = 0; i< arr.length; i++){
        if (arr[i]< min){
            min = arr[i];
            localMin  = i;
        }
    }
    return localMin;
}
let arr1 = [7, 12, 6, 9, 20, 56, 89];
let min = minArr(arr1);
alert(min);