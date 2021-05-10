class Connect{
    constructor(a,b){
     var connect_features={
         bodyA: a,
         pointB: b,
         stiffness: 0.04,
         length: 5
     }
     this.connection=Constraint.create(connect_features)
     World.add(myWorld,this.connection)
    }

    display(){


        if(this.connection.bodyA!=null){
            var s = this.connection.bodyA.position
            var t = this.connection.pointB
            line (s.x , s.y , t.x , t.y )
        }
       

    }

    fly(){
        this.connection.bodyA = null
    }
}