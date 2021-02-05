class Bird {
    constructor (x, y){
        var options = {
            'restitution': 0.6,
            'friction':1.2,
            'density':1.0
        }
        this.body =  Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("green");
        stroke("yellow");
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }
}