/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");
const ctx2 = canvas.getContext("2d");
// console.log(ctx);

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
class Root{
    constructor(x, y, i){
        this.i = i;
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 5;
        this.size = Math.random() * 1 + 2;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.size += 0.1;
        if(this.size < this.maxSize){
            if(this.i==0){
                ctx1.beginPath(); //begin path not connect with previous line
                ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx1.fillStyle = 'blue';
                // ctx.strokeStyle = 'blue';
                ctx1.lineWidth = 10;
                ctx1.fill();
                ctx1.stroke();
                this.i = 1;
            }
            else{
                ctx2.beginPath(); //begin path not connect with previous line
                ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx2.fillStyle = 'white';
                // ctx.strokeStyle = 'blue';
                ctx2.lineWidth = 10;
                ctx2.fill();
                ctx2.stroke();
                this.i = 0;
            }
            requestAnimationFrame(this.update.bind(this));
        }
    }
}


window.addEventListener('mousemove', function(e){
    for(let i=0;i<5;i++){
        const root = new Root(e.x, e.y, 0);
        root.update();
    }
});

 

