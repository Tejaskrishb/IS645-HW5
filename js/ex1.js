/**
 1.	Square Class
Create a square class defined by the following
•	Property -side
•	Methods
-	perimeter (side times 4)
-	area (side squared)
-	diagonal (square root of 2 * side squared)
-	describe – shows the squares information as follows:
Square with side 2 has perimeter of 8, area of 4, and diagonal of 2.828
*/

//creating class
class Square{
    constructor(side){
        this.side = side;
    }
    //method definition
    perimeter(){
        return this.side * 4;
    }
    area(){
        return this.side**2;
    }
    diagonal(){
        return (Math.sqrt(2)* this.side).toFixed(3);
    }
    describe(){
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
    }
}

const obj1 = new Square(2);
console.log(obj1.describe());

const obj2 = new Square(4);
console.log(obj2.describe());

const obj3 = new Square(8);
console.log(obj3.describe());
