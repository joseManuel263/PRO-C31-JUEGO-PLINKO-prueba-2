class Particle{
    constructor(x,y,r){
        var options={
            'restitution':0.8
        }
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
        this.r = r;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display(){
        var paperpos = this.body.position;
        push();
        var paperpos = this.body.position;
        translate(paperpos.x, paperpos.y);
        elipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}