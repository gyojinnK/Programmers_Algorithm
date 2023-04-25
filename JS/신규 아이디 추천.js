// 처음부터 배열로 변환하여 풀었으면 코드가 줄었을 듯
// 정규식을 공부하면 코드 10줄로 끝낼 수 있음

function solution(new_id) {
    var answer = '';
    
    // step1
    new_id = new_id.toLowerCase();
    console.log("step1 : " + new_id);

    // step2
    // 소문자, 숫자, 지정된 특수문자 | 이외의 모든 문자 삭제
    var settedFormats = ['-', '_', '.'];
    var temp = new_id.toString();
    for(var i=0; i<temp.length; i++){
        var t = temp.charAt(i);
        
        if(97 <= t.charCodeAt() && t.charCodeAt() <= 122){
            // 알파벳 소문자
        }else if(parseInt(t) || t=== '0'){
            //숫자
        }else{
            if(!settedFormats.includes(t)){
                //특수문자
                new_id = new_id.replace(t, '');
            }
        }
    }
    console.log("step2 : " + new_id);

    // step3
    // '.'이 연솓되면 하나로 표현
    new_id = [...new_id];
    new_id = new_id.reduce((acc, c, i, arr) => {
        if (c == "." && arr[i + 1] == ".") return acc;
        acc.push(c);
        return acc;
    }, []).toString().replaceAll(',', '');
    console.log("step3 : " + new_id);
    
    // step4
    temp = [...new_id];
    if(temp[0] === '.'){
        temp[0] = '';
    }
    if(temp[temp.length-1] === '.'){
        temp[temp.length-1] = '';
    }
    new_id = temp.toString().replaceAll(',', '');
    console.log("step4 : " + new_id);

    // step5
    if(new_id === ''){
        new_id = 'a';
    }
    console.log("step5 : " + new_id);

    // step6
    if(new_id.length > 15){
        new_id = new_id.slice(0, 15);
    }
    if(new_id[new_id.length-1] === '.'){
        temp = [...new_id];
        temp[temp.length-1] = '';
        new_id = temp.toString().replaceAll(',', '');
    }
    console.log("step6 : " + new_id);

    // step7
    if(new_id.length < 3){
        var lastT = new_id[new_id.length-1];
        while(new_id.length != 3){
            new_id += lastT;
        }
    }
    console.log("step7 : " + new_id);
    
    answer = new_id;
    
    return answer;
}
