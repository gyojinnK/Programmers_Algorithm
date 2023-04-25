// 일반 sort()를 사용하면 가장 앞의 자릿수를 읽어서 2, 10 -> 10, 2로 정렬됨
// Set객체를 이용하여 중복을 제거함

function solution(numbers) {
    var answer = [];
    
    var sum = new Array();
    for(var i=0; i<numbers.length - 1; i++){
        for(var j=i+1; j<numbers.length; j++){
           sum.push(numbers[i] + numbers[j]);
        }
    }
    // 중복제거를 위해서 Set객체 사용
    const set = new Set(sum);
    const res = [...set];

    // 오름차순 정렬
    var temp = 0;
    for(var i=0; i<res.length - 1; i++){
        for(var j=i+1; j<res.length; j++){
            if(res[i] > res[j]){
                temp = res[i];
                res[i] = res[j];
                res[j] = temp;
            }
        }
    }
    
    return res;
}
