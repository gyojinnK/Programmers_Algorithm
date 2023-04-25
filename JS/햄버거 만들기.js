// function solution(temp) {
//     var answer = 0;
//     var i=0;
//     while(true){
//         if(temp[i] === 1 && temp[i+1] === 2 &&
//         temp[i+2] === 3 && temp[i+3] === 1)
//         {
//             temp.splice(i, 4);
//             answer++;
//             i = 0;
//         }else if(i > temp.length-3){
//             break;
//         }else{
//             i++;
//         }
        
//     }
//     return answer;
// }

// 위 방식은 시간초과
// element에서 요소 하나씩 비교해가며 조건이 만족됐을 때 연산

function solution(element){
    var answer = 0;
    var arr = []; // 요소 하나씩 저장할 배열
    
    for(var i=0; i<element.length; i++){
        arr.push(element[i]); // 하나씩 저장
        if(
            arr[arr.length-4] === 1 &&
            arr[arr.length-3] === 2 &&
            arr[arr.length-2] === 3 &&
            arr[arr.length-1] === 1
          ){
            arr.splice(arr.length-4, 4);  // 조건을 만족한 부분 제거
            answer++;                     // 완성된 버거 + 1
        }
    }
    return answer;
}
