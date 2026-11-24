let y1 = 0;
let velocidad = 2;

function PantallaCreditos(){

   push();
   rectMode(CENTER);
   fill (255, 140, 0, 100);
   rect(650, 200, 250, 400);

   fill(0);
   textSize(16);
   textAlign(CENTER, TOP);
   text(textoboton[4], 650, y1);

  y1 -= velocidad;

   if (y1 <= -230) {
    y1 = height;
  }
  pop();

}

function PantallaCreditos2(){

   push();
   rectMode(CENTER);
   fill (255, 140, 0, 100);
   rect(150, 200, 250, 400);

   fill(0);
   textSize(18);
   textAlign(CENTER, TOP);
   text(textoboton[4], 150, y1);

  y1 -= velocidad;

   if (y1 <= -230) {
    y1 = height;
  }
  pop();

}
