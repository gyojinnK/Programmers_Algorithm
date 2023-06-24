class memInfo {
    constructor(name, yearn) {
        this.name = name;
        this.yearn = yearn;
    }
}

function solution(name, yearning, photo) {
    var answer = [];
    let memInfos = [];

    for (let i = 0; i < name.length; i++) {
        let mem = new memInfo(name[i], yearning[i]);
        memInfos.push(mem);
    }

    memInfos = memInfos.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });

    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        photo[i].sort();
        for (let j = 0; j < photo[i].length; j++) {
            memInfos.map((el) => {
                if (photo[i][j] === el.name) {
                    sum += el.yearn;
                }
            });
        }
        answer.push(sum);
    }

    return answer;
}
