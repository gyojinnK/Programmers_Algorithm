// 2진탐색
// 포인터를 사용해서 탐색범위를 절반씩 좁혀가며 값을 찾을 때 사용

/*
1. target이 중간값보다 작으면 중간값을 기준으로 좌측 아이템들을 탐색
2. target이 중간값보다 크면 우측 아이템들을 탐색
3. 같은 방법으로 선택된 중간의 값을 비교
4. 해당값을 찾을때 까지 이과정을 반복
*/

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (target < arr[middle]) {
            high = middle - 1;
        } else if (target > arr[middle]) {
            low = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 55, 70], 55));
console.log(binarySearch([10, 20, 50, 70, 90, 110], 100));
