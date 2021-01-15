// class Bob
// {
//   constructor(xpos,ypos,radius)
//   {     
//       var options={
//           isStatic: false,
//           resitution:1,
//           friction:0,
//           density:0.8
//       }

//     this.radius = radius  
//     this.ball = Bodies.circle(xpos,ypos,this.radius/2,options);

//     World.add(world,this.ball)
//   }

//   display()
//   {

//     var pos = this.ball.position; 
//     push(); 
//     rectMode(CENTER); 
//     translate(pos.x,pos.y); 
//     fill("brown"); 
//     circle(0,0,this.radius); 
//     pop();
//   }

    
    
// }

class Bob
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
      restitution:1,
      friction:0,
      density:0.8
        }
        this.radius = r;
        this.ball = Bodies.circle(x,y,this.radius/2,options);
        
      
        World.add(world,this.ball);
    }

    display()
    {
        var pos = this.ball.position;
        
        push();
          rectMode(CENTER);    
          translate(pos.x,pos.y);    
          fill("brown");
          circle(0,0,this.radius);
        pop();
    }
}