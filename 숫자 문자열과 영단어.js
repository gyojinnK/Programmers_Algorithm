function solution(s) {
    var answer = '';

    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    while (s != ''){
        for (var i = 0; i < 10; i++) {
            if (s.indexOf(words[i]) === 0) {
                answer += i.toString();
                s = s.replace(words[i], '');
            }
            else if (s.indexOf(numbers[i]) === 0) {
                answer += i.toString();
                s = s.replace(numbers[i], '');
            }
        }
    }
    answer = parseInt(answer);
    return answer;
}
