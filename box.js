class Box {
    constructor(x,y,w,h){
        var box_features = {
            isStatic : false,
            restitution : 1
          }
          this.box = Bodies.rectangle(x,y,w,h,box_features)
          World.add(myWorld,this.box)
          this.w = w
          this.h = h

    }

    display(){
        console.log(this.box.speed)
        if(this.box.speed>10){
            World.remove(myWorld,this.box)
        }
        else{
        push()
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        rectMode(CENTER)
        rect (0,0,this.w,this.h)
        pop()
        }
    }
}