class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          friction: 0
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      if(this.body.position.y < 770){
        var pos =this.body.position;
        fill(random(0,225),random(0,225),random(0,225));
        circle(pos.x, pos.y, 15);
        console.log(this.body.position.y)
      }else{
        World.remove(world,this.body)
      }
    }
  };
