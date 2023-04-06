// 헤매다 결국 다른분들의 풀이 참조해서 해결
// 최대값과 최소값에 집중해서 푸셨음

function solution(wallpaper) {
    var answer = [];
    
    let[x1, y1, x2, y2] = [50, 50, 0, 0,];

    wallpaper.map((row, i) => {
        var rowItem = [...row];
        rowItem.map((item, j) => {
            if(item === '#'){
                x1 = Math.min(x1, i);
                y1 = Math.min(y1, j);
                x2 = Math.max(x2, i+1);
                y2 = Math.max(y2, j+1);
            }
        })
    })
    answer = [x1, y1, x2, y2];
    return answer;
}
