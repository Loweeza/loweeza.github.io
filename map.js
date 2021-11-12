var mapImg = 0;
var cloudImg = 0;
var clouds = [];

class Cloud{
    constructor(x, y, w, h, s){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = s;
    }

    drawCloud(){
        push();
        blendMode(LIGHTEST);
        image(cloudImg, this.x, this.y, this.w, this.h);
        pop();
    }

    moveCloud(){
        if(this.x > width + this.w/2){
            this.x = -this.w;
            this.y = random(height - 270);
        }
        this.x += this.s;
    }

}

function preload(){
    mapImg = loadImage("assets/nostalgia_map.png");
    cloudImg = loadImage("assets/cloud.png");
}

function setup(){
    createCanvas(1126, 825);
    background(255);

    
    for(var i = 0; i < 8; i++){
        clouds[i] = new Cloud(random(width), random(height - 270), 500, 250, random(0.5, 1));
    }
}


function draw(){
    image(mapImg, 0, 0, width, height);

    for(var cloud of clouds) {
        cloud.drawCloud();
        cloud.moveCloud();
    }
}

function mouseClicked(){
    console.log(mouseX, mouseY);
}