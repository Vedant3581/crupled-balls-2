class Dustbin extends BaseClass {
    constructor(x, y, width, height) {
      super(600,650,width,height);
      this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
      super.display();
    }
}    