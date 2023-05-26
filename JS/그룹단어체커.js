let N = 4;
let input = ['aba', 'abab', 'abcabc', 'a'];
let answer = parseInt(N);

let tokens = [];
let reps = [];

for(let i=0; i<N; i++){
    // 단어 하나씩 읽고 등장 배열에 저장
    let target = input[i];    
    for(let j=0; j<target.length; j++){
        let t = target.charAt(j);
        tokens.push(t);
        if(tokens.length > 1 && tokens[j] != tokens[j-1]){
            reps.push(tokens[j-1]);
            if(reps.includes(t)){
                console.log(`${i}번째 : ${reps}`);
                answer--;
                tokens = [];
                reps = [];
                break;
            }
        }
    }
    tokens = [];
    reps = [];
}

console.log(answer);


