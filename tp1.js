let acciones = [];

const NOMBRES = ['kris_cae', 'kris_espada', 'kris_dispara'];
const FRAMES_POR_ACCION = [17, 11, 11];

const ESCALA = 3;
const X_KRIS = 400; 
const Y_KRIS = 370; 
const Y_INICIAL = -60; 

const VELOCIDAD_ANIMACION = 6;

const SPRITE_PISO = 14; 

const FRAMES_HASTA_PISO = SPRITE_PISO * VELOCIDAD_ANIMACION; 
const DISTANCIA_Y = Y_KRIS - Y_INICIAL; 
const VELOCIDAD_Y = DISTANCIA_Y / FRAMES_HASTA_PISO; 

let accionActual = 0;
let y = Y_INICIAL; 
let contadorAccion = 0;
let animacionIniciada = false;
let imgFondo; 

function cargarAccion(nombre, cantidad) {
  let frames = [];

  for (let i = 0; i < cantidad; i++) {
    frames.push(
      loadImage("./data/" + nombre + "_" + i + ".png")
    );
  }
  return frames;
}

function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(contadorAccion / velocidadAnimacion) % frames.length;
  return frames[indice];
}
function preload() {
  imgFondo = loadImage("./data/fondo.png");

  for (let a = 0; a < NOMBRES.length; a++) {
    acciones.push(
      cargarAccion(
        NOMBRES[a],
        FRAMES_POR_ACCION[a]
      )
    );
  }
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}
function mouseClicked() {
  if (!animacionIniciada) {
    animacionIniciada = true;
    accionActual = 0;
    contadorAccion = 0;
    y = Y_INICIAL;
  }
}

function draw() {
  background(20);
  image(imgFondo, width / 2, height / 2, width, height);

  if (animacionIniciada) {
    if (accionActual === 0) {
      contadorAccion++;
      if (contadorAccion < FRAMES_HASTA_PISO) {
        y += VELOCIDAD_Y;
      } else {
        y = Y_KRIS;
      }

      if (contadorAccion >= FRAMES_POR_ACCION[0] * VELOCIDAD_ANIMACION) {
        accionActual = 1;
        contadorAccion = 0;
      }
    } 
    else if (accionActual === 1) {
      contadorAccion++;
      if (contadorAccion >= FRAMES_POR_ACCION[1] * VELOCIDAD_ANIMACION) {
        accionActual = 2;
        contadorAccion = 0;
      }
    }
    else if (accionActual === 2) {
      contadorAccion++;
      if (contadorAccion >= FRAMES_POR_ACCION[2] * VELOCIDAD_ANIMACION) {
        animacionIniciada = false; 
        accionActual = 0;
        contadorAccion = 0;
        y = Y_INICIAL;
      }
    }
  }
  let frames = acciones[accionActual];
  let frame = elegirFrame(frames, VELOCIDAD_ANIMACION);

  image(
    frame,
    X_KRIS,
    y,
    frame.width * ESCALA,
    frame.height * ESCALA
  );
  
  
  fill(255);
  noStroke();
  textSize(18);
}
