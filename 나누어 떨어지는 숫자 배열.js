function solution(arr, divisor) {
    var answer = [];
    
    arr.map((elem) => {
        if(elem % divisor === 0){
            answer.push(elem);
        }
    })
    
    if(answer.length === 0){
        answer = [-1];
    }else{
        var temp = 0;
        for(var i=0; i<answer.length-1; i++){
            for(var j=i+1; j<answer.length; j++){
                if(answer[i] > answer[j]){
                    temp = answer[i];
                    answer[i] = answer[j];
                    answer[j] = temp;
                }
            }
        }
    }
    return answer;
}
