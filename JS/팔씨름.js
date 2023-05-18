const T = '3';
const tc = ['oxoxoxoxoxoxoxo', 'x', 'xxxxxxxxxxxx'];
let loseCnt = 0;
let answer = [];

for(let idx=0; idx<parseInt(T); idx++){
    for(let i=0; i<tc[idx].length; i++){
        let wol = tc[idx].charAt(i);
        if(wol === 'x'){
            loseCnt++;
        }
    }
    
    if(loseCnt > 7 ){
        answer.push(`#${idx + 1} NO`);
    }else{
        answer.push(`#${idx + 1} YES`);
    }
    loseCnt = 0;
}

answer.map((item)=>{
    console.log(item);
})