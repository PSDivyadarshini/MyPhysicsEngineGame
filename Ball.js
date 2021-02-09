class Ball {
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:1.0,
          friction:0.5,
          density:0.01
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options);
      this.image=loadImage("img myphygame/bowling ball.jpg");
      
      World.add(world,this.body);
    }

    display(){

        var pos=this.body.position
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("pink");
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}