class Constraint{
    //properties
    constructor(bird, log){
        var options = {
            bodyA:bird,
            bodyB: log, 
            length: 2,
            stiffness: 0.04
        }

        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    //function definition
    display(){

        var pointA = this.body.bodyA.position;// bird body's position
        var pointB = this.body.bodyB.position;// log6 body's position

        push ();
        strokeWeight(4);
        stroke("red");
        //Start(x1, y1) and End(x2,y2)
        line (pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    
}












