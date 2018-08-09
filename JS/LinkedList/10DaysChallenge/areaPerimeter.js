function getLetter(s) {
    let letter;
    // Write your code here
    let A_string = ["a","e","i","o","u"],
        B_string = ["b","c","d","f","g"],
        C_string = ["h","j","k","l","m"],
        D_string = ["n","p","q","r","s","t","v","w","x","y","z"];
    let first_char = s[0],
        _res = "";
    if(A_string.indexOf(first_char) != -1) {
        _res = "A";
    } else if(B_string.indexOf(first_char) != -1) {
        _res = "B";
    }else if(C_string.indexOf(first_char) != -1) {
        _res = "C";
    }else if(D_string.indexOf(first_char) != -1) {
        _res = "D";
    }
    switch(_res) {
        case  "A":
            letter= "A";
            break;
        case  "B":
            letter= "B";
            break;
        case  "C":
            letter= "C";
            break;
        case  "D":
            letter= "D";
            break;
        default : 
            letter  = "N/A";
            break;
    }
    return letter;
}

console.log(getLetter("gsdf"))