class Kindman extends Baseclass {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage("Kindman.jpg");
    }

    display() {
        super.display();
        var pos = this.body.position;
        push(); 
        image(this.image, pos.x, pos.y, 50, 50);
        pop();  
    }
}