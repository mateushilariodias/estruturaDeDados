function quickSort(array,  start = 0, end = array.length - 1) {
    if (end <= start) return 

    const pivot  = end
    let dividerOfRegions = start - 1

    for ( let i = start; i < end; i++ ) {
        if (array[pivot] > array[i]) {
            dividerOfRegions++
            if ( dividerOfRegions !== i ) {
                [array[i], array[dividerOfRegions]] = [array[dividerOfRegions], array[i]]
            }
        }
    }
    dividerOfRegions++

    if (array[dividerOfRegions] > array[pivot] && dividerOfRegions !== pivot) {
        [array[dividerOfRegions], array[pivot]] = [array[pivot], array[dividerOfRegions]]
    }

    quickSort(array, start, dividerOfRegions - 1)
    quickSort(array, dividerOfRegions + 1, end)
}

let array = [2, 5, 7, 1, 6, 3, 4, 12, 25, 22, 17]

quickSort(array)
console.log(array)