const gameik = document.getElementById('canvas').getContext('2d');

const gndak = {
  measure: 12,
  x: canvas.width/2,
  y: canvas.height/2,
  dX: 5,
  dY: 6

};
const taxtak1 = {
  x: 10,
  y: 190,
  width: 25,
  height: 128,
  dY:10,
  wins: 0,
};
const taxtak2 = {

  x: 770,
  y: 190,
  width: 25,
  height: 128,
  dY:10,
  wins: 0
};

const klorik = function() {
gameik.fillStyle = 'yellow';
gameik.beginPath();
gameik.arc(gndak.x, gndak.y, gndak.measure, 0, 2 * Math.PI);
gameik.fill();
};


const rectangle = function() {
gameik.fillStyle ='green';  
gameik.clearRect(0, 0, canvas.width, canvas.height);
gameik.fillRect(taxtak1.x, taxtak1.y, 25, 128);
gameik.fillRect(taxtak2.x, taxtak2.y, 25, 128);

};
const showResults = function() {
  
  const results1 = taxtak1.wins + "";
  const results2 = taxtak2.wins + "";
  const results = results1 + " ~_~ " +  results2;
  gameik.fillText(res,canvas.width/2- 1.5*res.length**2,50);
  gameik.font="48px Arial";
}

const improveKlorik = function () {
  gndak.x += gndak.dX;
  gndak.y -= gndak.dY;
  if(gndak.y - gndak.measure < 0 || gndak.y +gndak.measure > canvas.height) gndak.dY = -gndak.dY;
  if(taxtak1.x + taxtak1.width > gndak.x - gndak.measure && taxtak1.x < gndak.x + gndak.measure  && gndak.y - gndak.measure < taxtak1.height + taxtak1.y  &&
     gndak.measure + gndak.y > taxtak1.y) 
	 {
    gndak.dY *= 1.05;
	gndak.dX = - gndak.dX*1.05;
    
     }
     if( taxtak2.width + taxtak2.x > gndak.x - gndak.measure && taxtak2.x < gndak.x + gndak.measure  &&
        taxtak2.y + taxtak2.height > gndak.y - gndak.measure  && taxtak2.y < gndak.y + gndak.measure ) 
		{
      gndak.dX = -gndak.dX * 1.05;
      gndak.dY *= 1.05;
     }
	 if(gndak.x + gndak.measure> canvas.width){
      taxtak1.wins+= 1;
      gndak.x = canvas.width/2; gndak.y = canvas.height/2;
    }
    if(gndak.x -gndak.measure < 0) {
      taxtak2.wins += 1;
      gndak.x = canvas.width/2; gndak.y = canvas.height/2;
    }
    
    if(gndak.dY >= 12) gndak.dY = 12;
    if(gndak.dX >= 12) gndak.dX = 12;
}

const f = function() {
  rectangle();
  improveKlorik();
  klorik();
  showResults();
 
  requestAnimationFrame(f);
};
f();
const w = 87;
const s = 83;
const up = 38;
const keydown = 40;
let up1 = false;
let down1 = false;
let w1 = false;
let s1 = false;

document.addEventListener('keydown', function(event) {
if(event.keyCode === up) {
    up1 = true;
  }
    
if(event.keyCode === keydown) {
    down1 = true;
  }
if(event.keyCode === w) {
    w1 = true;
  }
if(event.keyCode === s) {
    s1 = true;
  }
if(s1 === true) {
 taxtak1.y += taxtak1.dY;
 if(taxtak1.y + 128 > canvas.height) taxtak1.y  = canvas.height - 128;
  }
if(up1 === true){
 taxtak2.y -= taxtak2.dY;
 if(taxtak2.y < 0) taxtak2.y = 0; 
}
if(w1 === true){
  taxtak1.y -= taxtak1.dY;
  if(taxtak1.y < 0) taxtak1.y = 0;
 

}
if(down1 === true){
  taxtak2.y += taxtak2.dY;
  if(taxtak2.y + 128> canvas.height) taxtak2.y = canvas.height - 128;
}
}, false);

document.addEventListener('keyup', function(event) {
  if(event.keyCode === up) {
     up1 = false;
    }
     
  if(event.keyCode === w) {
      w1 = false;
    }
  if(event.keyCode === s) {
     s1 = false;
  }
  if(event.keyCode === keydown) {
    down1 = false;
  }
}, false);
