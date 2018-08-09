let _input = [1,2,3,4,5,6,7,8,9,10];
Array.prototype.unique =  function () {
    let arr = [];
    for (let index = 0; index < this.length; index++) {
        if(arr.indexOf(this[index]) === -1 ) {
            arr.push(this[index]);
        }
    }
    return arr;
}
function getSecondHieghest(_input) {
    let _outPut = _input.sort((a,b) => a-b);
    _outPut = _outPut.unique();
    console.log(_outPut)
    console.log(_outPut[_outPut.length - 2]);
}

getSecondHieghest(_input);