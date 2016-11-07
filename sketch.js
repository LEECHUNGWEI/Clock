function setup(){
	createCanvas(800, 600);
	angleMode(DEGREES)

}
function draw(){
	background(240);
	
	push();
	fill(255);
	noStroke();
	ellipse(width/2,height/2,500,500);
	pop();
	
	//hour
	push();
	translate(width/2,height/2);
	if(hour()>12){
	  var a = hour()-13
	}
	else{
    var a = hour()
	  
	}
	rotate((a+1)*30);
	stroke(50);
	strokeWeight(10);
	line(0,0,0,-110);
	pop();
	
	//minute
	push();
	translate(width/2,height/2); 
	rotate((minute()+1)*6);
	stroke(50);
	strokeWeight(4);
	line(0,0,0,-170);
	pop();
	
	//second
	push();
	translate(width/2,height/2); 
	rotate((second()+1)*6);
	stroke(51,207,255);
	strokeWeight(1.5);
	line(0,30,0,-220);
	pop();
	
	noStroke()
	fill(50);
	ellipse(width/2,height/2,17,17);
	fill(51,207,255);
	ellipse(width/2,height/2,8,8);
}