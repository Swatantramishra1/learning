class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Rectangle extends Shape {
    constructor(color, width , height) {
        super(color);
        this.width =width;
        this.height = height;

    }
    getColor() {
        return this.color;
    }
}

// let sp = new Shape("red");
// let _rectngle = new Rectangle(sp,5,10);
// console.log(_rectngle.getColor())



class Stack extends Array {
    constructor() {
        super();
    }

    top() {
        return  this[this.length-1];
    }
}
let stc = new Stack();
stc.push(1);
stc.push(3);
stc.push(5);

console.log(stc.top())

