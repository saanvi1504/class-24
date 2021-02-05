class Ground{
    constructor(x,y,width,height){
        var options = {isStatic : true}
        this.ground = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.ground);
        this.height = height;
        this.width = width;
    }
    display(){
        rectMode(CENTER);
        fill("grey");
        stroke("blue");
        strokeWeight(4);
        rect(this.ground.position.x, this.ground.position.y,this.width, this.height);

    }
}