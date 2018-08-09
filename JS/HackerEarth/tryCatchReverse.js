let _input = "1234";
function getReverseNumber(_input) {
    try {
        console.log(_input.split('').reverse().join(''))
    } catch(e) {
        console.log(e.message);
        console.log(_input)
    }
}
getReverseNumber(_input);