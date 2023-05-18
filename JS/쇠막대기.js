//BOJ
const r = '(((()(()()))(())()))(()())'

let answer = 0;
let stack = [];
let idx = 0;
while(idx < r.length){
    let t = r.charAt(idx);
    let elem = {value: t, i: idx};
    stack.push(elem);
    // console.log(stack);
    if(stack[stack.length-1].value == ')' && stack[stack.length-2].value == '(' 
        && stack[stack.length-1].i - 1 === stack[stack.length-2].i){
        answer += stack.length - 2;
        stack.pop();
        stack.pop();
    }else if(stack[stack.length-1].value == ')' && stack[stack.length-2].value == '('
        && stack[stack.length-1].i - 1 !== stack[stack.length-2].i){
        answer += 1;
        stack.pop();
        stack.pop();
    }
    idx++;
}

console.log(answer);