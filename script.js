/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const cutTheSticks = (arr) => {
    let sticksAfterEachIteration = [];
    while (arr.length > 0) {
        console.log(arr.length);
        sticksAfterEachIteration.push(arr.length);
        let min = Math.min.apply(null, arr);
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] - min !== 0) {
                newArr.push(arr[i]);
            }
        }
        arr = newArr;  
    }
    return sticksAfterEachIteration;
}
