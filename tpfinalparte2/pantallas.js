let estado = 0;
let afuera;
let perdiste;
let inicio;

let textoboton = [
"¡¡GANASTE!! \nLograste cruzar \nla calle.",
"Ayuda a Mango a cruzar \nla calle para poder \nentrar dentro de la casa \nya que tiene calor",
"AYUDAR",
"PERDISTE :( \nMango ya no podra \nentrar a la casa.",
"¡¡¡MUCHAS GRACIAS \nPOR JUGAR!!! \n\nComision n3 \n\nAlumnxs: \nCiancio Valentín 125553/1 \nMaldonado azul 125620/4",
]

function PantallaDeInicio(){

  push();
  fill(255);
  textSize(30);
  textAlign(CENTER, TOP);
  text(textoboton[1], 400, 30);

  rectMode(CENTER);
  fill (220, 20, 60);
  rect(100, 330, 160, 60);
  fill(255);
  textSize (24);
  textAlign(CENTER, CENTER)
  text(textoboton[2], 100, 330);
  pop();
}

function PantallaGana(){

  push();
   fill(255);
   textSize(30);
   textAlign(CENTER, TOP);
   text(textoboton[0], 400, 30);
  pop();

}

function PantallaPierde(){

  push();
   fill(0);
   textSize(30);
   textAlign(CENTER, TOP);
   text(textoboton[3], 400, 30);
  pop();

}

function CursorSobreBoton(x, y, ancho, alto) {

   if ( mouseX>x - ancho/2 && mouseX<x + ancho/2 &&
    mouseY>y - alto/2 && mouseY<y + alto/2 ) {

    return true;
  } else {
    return false;
  }
}

function pantallasestados(){

if (estado == 0) {
  image (inicio, 0, 0, 800, 400);
   PantallaDeInicio();

 } else if (estado == 1) {
     objjuego.dibujar();

 }
}
