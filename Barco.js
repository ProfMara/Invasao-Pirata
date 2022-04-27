class Barco {
    constructor(x, y) {
        this.diametro = 170
        this.body = Bodies.circle(x, y,this.diametro/2)
        this.image = loadImage("barco.png");
        World.add(world, this.body);
        this.speed = 0;
    }


    
    display() {
        var pos = this.body.position;
        
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.diametro, this.diametro);
        pop();

    }

}