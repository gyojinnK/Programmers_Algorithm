  function solution(s, skip, index) {
    let answer = '';
    let skipArr = [...skip];
    for (let alph of s) {
      let alphCode = alph.charCodeAt();
      let i = index;
  
      while (i > 0) {
        alphCode = alphCode === 122 ? 97 : alphCode + 1;
        if (!skipArr.includes(String.fromCharCode(alphCode))) {
          i--;
        }
      }
      answer += String.fromCharCode(alphCode);
    }
    return answer;
  }
