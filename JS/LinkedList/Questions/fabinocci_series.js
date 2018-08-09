function fabSeries(n) {
    if(n == 1) {
        return [0,1]
    } else {
        let s = fabSeries(n-1);
         s.push(s[s.length -1 ] + s[s.length -2]); 
        return s;
    }
}

function fabWithoutRec(n) {
    let _startNumber=[0,1],
        _result=_startNumber;
    if(n==1) {
        return _startNumber;
    }
    else {
        for (let index = 2; index < n; index++) {
            _result.push( _result[_result.length -1 ] + _result[_result.length - 2])       
        }
    }

    return _result;
}

function isCheckSubString(str,subStr) {
    if(str.includes(subStr)){
        return true
    }
    else {
        return false
    }
}

console.log(isCheckSubString("geeksForGeeks","geek"))