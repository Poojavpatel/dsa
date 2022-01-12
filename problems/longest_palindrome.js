// 'ababc'
// 'abacdefghijklmnopopkjlicba'
// 'abcdefghippppjklmnqttqopq'

// 'abba'
// 'ababa'
// 'aaaaaaaaaa'

function longestPalindrome(b) {
  // Brute force
  let longestPalindrome = '';
    for(let i = 1; i<b.length-1; i++){
        const palStr = palindrome(b, i-1, i+1, b[i])
        longestPalindrome = palStr.length> longestPalindrome.length? palStr: longestPalindrome
        if(b[i]==b[i+1]){
            const palStr2 = palindrome(b, i-1, i+2, b[i]+b[i+1])
            longestPalindrome = palStr2.length> longestPalindrome.length? palStr2: longestPalindrome
        }
    }
    return longestPalindrome
}
function palindrome(str, i, j, a){
    let s = a
    while(i>=0 && j<str.length){
        if(str[i]==str[j]){
            s = str[i]+ s + str[j];
            i--;
            j++;
        }else break;
    }
    return s;
}

console.log(longestPalindrome('abcdefghippppjklmnqttqopq'));
console.log(longestPalindrome('abacdefghijklmnopopkjlicba'));
console.log(longestPalindrome('abba'));
console.log(longestPalindrome('ababa'));
console.log(longestPalindrome('aaaaaaaaaa'));