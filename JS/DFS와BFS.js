asdf]

let N = 4;
let M = 5;
let V = "1";
let input = ["1 2", "1 3", "1 4", "2 4", "3 4"];
let graph = [];
for (let i = 0; i < N; i++) {
    graph.push([]);
}

for (let i = 0; i < M; i++) {
    let temp = input[i].split(" ");
    let v1 = temp[0];
    let v2 = temp[1];

    graph[v1 - 1].push(v2);
    graph[v2 - 1].push(v1);
}

const bfs = (graph, startNode) => {
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            if (Array.isArray(graph[node])) {
                needVisit = [...needVisit, ...graph[node]];
              } else {
                // graph[node]가 배열이 아닌 경우 처리
                // 필요한 동작을 추가하세요
              }
        }
    }
    return visited;
};



console.log(bfs(graph, V));


// 0 : [2, 3, 4]
// 1 : [1, 4]
// 2 : [1, 4]
// 3 : [1, 2, 3]