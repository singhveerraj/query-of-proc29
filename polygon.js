class Polygon {
constructor(x,y,sides,radius){
    options={
        restitution:1,
        density:1.2,
        friction:1
    }
this.body = Bodies.polygon(x,y,sides,radius,options);
this.radius = radius;
this.sides = sides;
this.image = loadImage("TowerSiege-1-main/polygon.png");
World.add(world,this.body);



}
display(){
var pos = this.body.posittion;
imageMode(CENTER);
image(pos.x,pos.y,this.sides,this.radius);





    
    }






}