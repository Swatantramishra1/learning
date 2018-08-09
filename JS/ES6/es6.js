// Arrow Functions Lexical this

class Number {
    constructor() {
        this.number = [1,3,4,5,6,7,8];
        this.fives=[];
    }
    createdFive() {
        this.number.forEach((v) => {
            if(v %  5 == 0) {
                this.fives.push(v)
            }
        })
        console.log(this.fives)
        let self = this;
        this.number.forEach( function(v) {
            if(v %  5 == 0) {
                self.fives.push(v)
            }
        })
        console.log(this.fives)


    }
}
let num = new Number();
num.createdFive();
