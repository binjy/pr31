class Particles{
    constructor(x,y,r){
        var options = {
            restitiustion:0.4
        }
        this.r=r

        this.body = bodies.circle(x,y,this.r,option)
        this.color = color(random(0,255),random(0,255), random(0,255))



    }
    display(){


        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }









}