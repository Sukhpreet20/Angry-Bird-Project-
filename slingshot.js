class Slingshot{
    //properties
    constructor(bird, point){
        var options = {
            bodyA:bird,
            pointB: point, 
            length: 2,
            stiffness: 0.04
        }

        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    //function definition
    display(){

        var pointA = this.body.bodyA.position;// bird body's position
        var pointB = this.body.pointB;// point body's position

        push ();
        strokeWeight(4);
        stroke("red");
        //Start(x1, y1) and End(x2,y2)
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    
}












