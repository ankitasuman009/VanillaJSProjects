/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");

console.log(canvas.getContext("2d"));

var drawing = false;
// console.log(ctx2);

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
class Root{
    constructor(x, y, i){
        this.ctx1 = canvas.getContext("2d");
        
        this.ctx2 = canvas.getContext("2d");
        this.i = Math.floor(Math.random() * 6);
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 5;
        this.minSize = 1;
        this.size = Math.random() * 7 + 5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.1;
        if(this.size > this.minSize){
            
            this.ctx1.beginPath(); //begin path not connect with previous line
            this.ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            if(this.i==0){
                this.ctx1.fillStyle = 'blue';
                // this.ctx1.strokeStyle = 'blue';
                
            }
            else if(this.i==1){
                // ctx2.beginPath(); //begin path not connect with previous line
                // ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.ctx1.fillStyle = 'white';
                // this.ctx1.strokeStyle = 'white';
                // ctx2.lineWidth = 10;
                // ctx2.fill();
                // ctx2.stroke();
            }
            else if(this.i==2){
                // ctx2.beginPath(); //begin path not connect with previous line
                // ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.ctx1.fillStyle = 'yellow';
                // this.ctx1.strokeStyle = 'yellow';
                // ctx2.lineWidth = 10;
                // ctx2.fill();
                // ctx2.stroke();
            }
            else if(this.i==3){
                // ctx2.beginPath(); //begin path not connect with previous line
                // ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.ctx1.fillStyle = 'red';
                // this.ctx1.strokeStyle = 'red';
                // ctx2.lineWidth = 10;
                // ctx2.fill();
                // ctx2.stroke();
            }
            else if(this.i==4){
                // ctx2.beginPath(); //begin path not connect with previous line
                // ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.ctx1.fillStyle = 'green';
                // this.ctx1.strokeStyle = 'green';
                // ctx2.lineWidth = 10;
                // ctx2.fill();
                // ctx2.stroke();
            }
            else if(this.i==5){
                // ctx2.beginPath(); //begin path not connect with previous line
                // ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                this.ctx1.fillStyle = 'orange';
                // this.ctx1.strokeStyle = 'orange';
                // ctx2.lineWidth = 10;
                // ctx2.fill();
                // ctx2.stroke();
            }
            this.ctx1.lineWidth = 10;
            this.ctx1.fill();
            this.ctx1.stroke();
            // console.log(this.i);
            this.i = Math.floor(Math.random() * 6);
            requestAnimationFrame(this.update.bind(this));
        }
    }

//     makeBlack(){
        
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.size += 0.2;
//         if(this.size < this.maxSize){

//         this.ctx2.beginPath();
//         this.ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         this.ctx2.fillStyle = 'black';
//         this.ctx2.strokeStyle = 'black';
//         this.ctx2.fill();
    
//         this.ctx2.lineWidth = 10;
//         this.ctx2.fill();
//         this.ctx2.stroke();
//     requestAnimationFrame(this.makeBlack.bind(this));
// }
//     }
}


window.addEventListener('mousemove', function(e){
    // if(drawing){
        for(let i=0;i<20;i++){
            const root = new Root(e.x, e.y, 0);
            root.update();
        }
        

    // }
});


// window.addEventListener('mousedown', function(e){
//     drawing = true;
// });

// window.addEventListener('mousemove', function(e){
//     for(let i=0;i<100;i++){
//         const root2 = new Root(e.x, e.y, 0);
//         root2.makeBlack();
//     }
//     // drawing = false;
// });

 

