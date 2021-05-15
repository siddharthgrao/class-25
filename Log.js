class Log extends BaseClass{
    constructor(x, y, height, angle) {
      
      super(x,y,20,height,angle);

      Matter.Body.setAngle(this.body, angle);
      
      this.image = loadImage("sprites/wood2.png");

    }
    }

  //DRY = do not repeat code
  //inheritance
  //parent class - baseclass
  //child class - sub class
  //child class inherits properties and function from parent class
  //BaseClass 
  //child classes of BaseClass - pig, bird, log, box
  