class Rope
{
    constructor(body1,body2, offsetX, offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:0,
            stiffness:0.3
            }

        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }

    display()
    {


     var firstPosition = this.rope.bodyA.position
    var secondPosition = this.rope.bodyB.position
    strokeWeight(3);
    stroke("black");

    line(firstPosition.x,firstPosition.y,secondPosition.x+this.offsetX,secondPosition.y);   
    // line(450,400,370,100);

    console.log("f,y"+firstPosition.x);

    console.log(secondPosition.x);



    }
}