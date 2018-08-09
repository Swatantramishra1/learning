


function getString(str) {
    let _strArr = str.split(','),
        _strGroups = {},
        _tempGroup = [],
        _output = [];
        //linear
    _strArr.forEach((element, index) => {
        if (!_strGroups.hasOwnProperty(element.length)) {
            _strGroups[element.length] = [];
            _strGroups[element.length].push(element)
        } else {

            _strGroups[element.length].push(element)
        }
    });

    console.log("first",_strGroups)
    for (const key in _strGroups) {
        if (key == 1) {
            _output.push(_strGroups[key])
        } else if (_strGroups.hasOwnProperty(key)) {
            const element = _strGroups[key];
            _tempGroup.push(element);
        }
    }
    console.log("second",_output)
    console.log("third",_tempGroup)
    // console.log(_tempGroup)
    let _temp = {};
    _tempGroup.forEach((element, index) => {
        element.forEach((dt, inx) => {
            let _d = dt[0].charCodeAt() - dt[1].charCodeAt();
            _d = _d < 0 ? _d * -1 : _d;
            if (_d == 25) {
                _d = 1;
            }
            if (!_temp.hasOwnProperty(_d)) {
                _temp[_d] = [];
                _temp[_d].push(dt);
            } else {
                _temp[_d].push(dt);
            }
        })
    });

    for (const key in _temp) {
        if (_temp.hasOwnProperty(key)) {
            _output.push(_temp[key])
        }
    }

    console.log(_output)


}


function getDiff(str) {
    let _temp = str.split(''),
        _tempCharAt = _temp.map((dt) => dt.charCodeAt());
    // for (let index = 0; index < _tempCharAt.length; index++) {
    //     const element = _tempCharAt[index];

    // }

    console.log(_tempCharAt)
}
// getDiff("abx")
// console.log("a".charCodeAt())
getString("a,b,z,ab,yz,pr,ba,za")

