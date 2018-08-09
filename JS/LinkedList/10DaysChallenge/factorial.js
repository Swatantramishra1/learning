function getFactorial(params) {
    let _n = parseInt(params)
    if(_n == 0) 
        return 1;
    return _n * getFactorial(_n-1)
}

console.log(getFactorial(5))