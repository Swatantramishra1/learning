let _arr = [1,2,2,5,4];

function checkForDuplicate(dt) {
    let _temp = [],res = "";
    dt.forEach(element => {
       if(_temp.indexOf(element) == -1) {
           _temp.push(element)
       } else {
           res= element;
         
       }
    });
    return res;
}

console.log("Duplicate exist number " , checkForDuplicate(_arr));

