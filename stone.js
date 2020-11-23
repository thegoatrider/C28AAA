class Stone {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1, 
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("stoneImage.jpg");
        World.add(world, this.body);
     }                                                               
          display(){
        var pos =this.body.position;
        rectMode(CENTER);
       // imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        fill("brown");
        rect(pos.x, pos.y, this.width,this.height);
      }
    }