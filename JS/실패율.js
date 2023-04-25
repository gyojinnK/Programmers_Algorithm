function solution(N, stages) {
    var answer = [];
    var userCount = stages.length;
    var check = new Array(N);
    for(var i=0; i<check.length; i++){
        check[i] = 0;
    }
    
    stages.map((user, i) => {
        check[user-1]++;
    })
    
    var tempArr = new Array();
    var stuck = 0;
    for(var i=0; i<check.length; i++){
        var temp = {res : 0, index : 0};
        temp.res = check[i] / (userCount - stuck);
        temp.index = i+1;
        tempArr.push(temp);
        stuck += check[i];
    }
    
    // 객체 배열 내림차순
    tempArr.sort((a, b)=>{
        if(a.res > b.res) return -1;
        if(a.res < b.res) return 1;
        return 0;
    })
    
    tempArr.map((temp) => {
        answer.push(temp.index);
    })
    
    if(answer.length > N){
        answer = answer.slice(0, N);
    }
    
    return answer;
}
