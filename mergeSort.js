const mergeSort = (array) => {
    if (array.length < 2) return array
    
    let middleIndex = Math.ceil(array.length / 2)
    let leftArray = array.slice(0, middleIndex);
    let rightArray = array.slice(middleIndex);
    // console.log(leftArray,rightArray)
    
    let sortedLeftArray = mergeSort(leftArray);
    let sortedRightArray = mergeSort(rightArray);
    let sortedArray = [];
    
    for (let i = 0; i < sortedLeftArray.length; i++) {
        while (sortedLeftArray[i] > sortedRightArray[0]) {
            sortedArray.push(sortedRightArray.shift());
        }
        sortedArray.push(sortedLeftArray[i])
    }
    if (sortedRightArray.length > 0 ) {
        sortedArray.push(...sortedRightArray)
    }
    
    return sortedArray
}

console.log(mergeSort([99,45,53,37,28,89]))
