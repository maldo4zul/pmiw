class juego {

  constructor() {
    this.autos = [];  
    this.esperaCamion = random(300, 900);
    this.esperaMoto = random(200, 600);
    this.camionPendiente = false;
    this.motoPendiente = false;

    this.mango = new mango(width/2, 375);
    this.gano = false;

    this.crearautos();
  }

  dibujar() {

    if(this.mango.vida && !this.gano) {
      this.generarEspeciales();
    }

    for(let i = 0; i < this.autos.length; i++) {

      if(this.mango.vida && !this.gano) {
        let dioVuelta = this.autos[i].mover();

        if(dioVuelta) {
          this.cambiarVehiculo(i);
        }
      }

      this.autos[i].dibujar();

      if(this.mango.vida && !this.gano) {
        this.mango.atropellar(this.autos[i]);
      }

    }

    stroke(0);
    strokeWeight(2);

    for(let i = 0; i <= 5; i++) {
      line(0, 50 + i*60, width, 50 + i*60);
    }

    noStroke();
    
    push();
    fill(255);
    textSize(12);
    textAlign(LEFT, TOP);
    text(
        "Lleva a Mango al otro lado de la calle con las flechitas sin que lo atropellen",
      10,
       8
     );
    pop();

    this.mango.dibujar();

    this.ganar();

    if(!this.mango.vida) {
      image(perdiste, 0, 0, 800, 400);
      PantallaPierde();
      PantallaCreditos();
    }

    else if(this.gano) {
      image(afuera, 0, 0, 800, 400);
      PantallaGana();
      PantallaCreditos2();
    }

    if(!this.mango.vida || this.gano) {

      fill(255);
      rect(300, 280, 200, 50);

      fill('#1A1919');
      textSize(15);
      textAlign(CENTER, CENTER);
      text("REPETIR", 400, 305);

    }
  }

  iniciar() {

  }

  crearautos() {

    this.autos = [];

    let espacioEntreAutos = 330;
    let distancia = 140 + espacioEntreAutos;

    for(let i = 0; i < 5; i++) {

      let y = 55 + i*60;
      let velocidad;
      let x;

      if(i % 2 == 0) {
        velocidad = 2;
        x = 20;
      }

      else {
        velocidad = -2;
        x = 170;
      }

      this.autos.push(new autos(x, y, velocidad));
      this.autos.push(new autos(x + distancia, y, velocidad));

    }

  }

  generarEspeciales() {

    this.esperaCamion--;
    this.esperaMoto--;

    if(this.esperaCamion <= 0) {
      this.camionPendiente = true;
      this.esperaCamion = random(300, 900);
    }

    if(this.esperaMoto <= 0) {
      this.motoPendiente = true;
      this.esperaMoto = random(200, 600);
    }
  }

  cambiarVehiculo(i) {

    let v = this.autos[i];

    if(v.velocidad >= 0) {
      return;
    }

    let esAuto = v instanceof autos;

    if(esAuto && this.camionPendiente) {
      this.camionPendiente = false;
      this.autos[i] = new camiones(width, v.yCarril, v.velocidad);
    }

    else if(esAuto && this.motoPendiente) {
      this.motoPendiente = false;
      this.autos[i] = new motos(width, v.yCarril, v.velocidad);
    }

    else if(!esAuto) {
      this.autos[i] = new autos(width, v.yCarril, v.velocidad);
    }
  }

  crearmango() {
    this.mango = new mango(width/2, 375);
    this.gano = false;
  }

  ganar() {
    if(this.mango.posY <= 25 && this.mango.vida) {
      this.gano = true;
    }
  }

  teclaPresionada(keyCode) {
    if(this.mango.vida && !this.gano) {
      this.mango.teclaPresionada(keyCode);
    }
  }

  reiniciar() {
    this.mango = new mango(width/2, 375);
    this.gano = false;
    this.crearautos();

    this.esperaCamion = (random(300, 900));
    this.esperaMoto = (random(200, 600));
    this.camionPendiente = false;
    this.motoPendiente = false;
  }

  mouseClicked(x, y) {

    if(!this.mango.vida || this.gano) {

      if(x > 300 && x < 500 && y > 280 && y < 330) {
        this.reiniciar();
      }

    }

  }
}
