let _input = "javascriptloops";
function vowelsAndConsonants(_input) {
    let _vowel = [],_contant = [], vowels = ["a","e","i","o","u"], _result = [];
    _input.split('').forEach(element => {
        if(vowels.indexOf(element) !== -1) {
            _vowel.push(element);
        } else {
            _contant.push(element);
        }
    });
    _result = _vowel.concat(_contant);
    _result.forEach(element => {
        console.log(element)
    });
}
vowelsAndConsonants(_input);