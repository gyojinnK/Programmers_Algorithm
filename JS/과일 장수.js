// 하나의 상자의 가격 = 가장 낮은 가격 * 사과 개수
// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수)
function solution(k, m, score) {
    let answer = 0;
    let ress = [];
    const appleCnt = score.length;
    const range = parseInt(appleCnt / m);
    score.sort();

    for(let i=0; i<range; i++){
        let box = [];
        let cnt = 0;
        for(let j=0; j<appleCnt; j++){
            cnt++;
            if(cnt > m){
                break;
            }else {
                box.push(score.pop());
            }
        }
        ress.push(box[m-1] * m);
    }
    ress.map((item) => {
        answer += item;
    })

    return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	));