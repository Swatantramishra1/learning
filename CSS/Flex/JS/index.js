class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log("draw");
        };
    }
}


class Vehicle {
    constructor(){
        this.color = 'red';
        this.start = function()
        {
            return "started";
        },
        this.stop = function ()
        {
            return "stopped";
        }
    }
}
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log(draw);
//         };
//     }
// }


const circle = new Circle(1);
console.log(circle)

