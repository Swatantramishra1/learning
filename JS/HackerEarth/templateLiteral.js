let _input = [ 140, 48 ];
function getTemplateLiteral(s) {
    let s1,s2,arr=[];
    s1 = (s[1] + Math.sqrt( Math.pow(s[1],2) - 16 * s[0] )) / 4 ;
    s2 = (s[1] - Math.sqrt( Math.pow(s[1],2) - 16 * s[0] )) / 4 ;
    arr=[s1,s2];
    console.log(arr)
  return arr.sort((a,b) => a-b)
}
console.log(getTemplateLiteral(_input));
// console.log(Math.pow(48,2))