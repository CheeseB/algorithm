class Solution {
  int romanToInt(String s) {
    int answer = 0;
    var romanObject = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    var subtractRomanList = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];

    for (var i = 0; i < s.length; i++) {
        var roman = s[i];
        int score = romanObject[roman] ?? 0;
        
        answer += score;
    }

    for (var i = 0; i < subtractRomanList.length; i++) {
        var subtractRoman = subtractRomanList[i];

        if (s.contains(subtractRoman)) {
            answer -= (romanObject[subtractRoman[0]] ?? 0) * 2;
        }
    }

    return answer;
  }
}