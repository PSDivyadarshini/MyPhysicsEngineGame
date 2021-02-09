class Ground{
    
    constructor(){
    
        var groundOptions={
            isStatic:true,
            density:20.0
        }
        this.body=Bodies.rectangle(600,920,1200,20,groundOptions);
        this.width=2000;
        this.height=10;
        World.add(world,this.body);
    }
    
       display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(5);
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
       }
    
}
    
    
        
    