function solution(absolutes, signs) {
    var answer = 0;
    var rnArr = [];
    
    for(var i=0; i<signs.length; i++){
        var realNum = {num: 0, signs: false};
        realNum.num = absolutes[i];
        realNum.signs = signs[i];
        rnArr.push(realNum);
    }
    
    rnArr.map((obj) => {
        if(obj.signs === false){
            answer += obj.num * -1;
        }else{
            answer += obj.num;
        }
    })
    
    return answer;
}
