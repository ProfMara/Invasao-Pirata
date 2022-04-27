class BalaCanhao {
    constructor(x, y) {
        var parado = {
            isStatic: true
        }
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r / 2, parado)
        this.image = loadImage("bala-de-canhao.png");
        World.add(world, this.body);
        this.trajetoria = [];
    }

   


    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();

        
        if(this.body.velocity.x > 0 && pos.x > 40){
            var posicao = [pos.x, pos.y];
            this.trajetoria.push(posicao);
        }

        for(var i = 0; i < this.trajetoria.length; i++){
            image(this.image, this.trajetoria[i][0], this.trajetoria[i][1], 5,5);
        }

    }

    atirar(){
        var a = canhao.angle-28;
        a *= (3.14/180);
        var v = p5.Vector.fromAngle(a);
        v.mult(90/3.14);
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {x:v.x,y:v.y})
    }

}