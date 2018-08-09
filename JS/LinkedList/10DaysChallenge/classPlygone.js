class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return (this.w * this.h);
}

class Square extends Rectangle {
    constructor(w) {
        super();
        this.w = w;
        this.h = w;
        
    }

}


const rec = new Rectangle(3,4);
const sqre = new Square(3);
console.log(rec.area())
console.log(sqre.area())