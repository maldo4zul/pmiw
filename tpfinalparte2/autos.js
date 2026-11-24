class autos {

  constructor(posX, posY, velocidad) {
    this.miImagen = random([imgAuto1, imgAuto2, imgAuto3]);

    this.posX = posX;
    this.posY = posY;
    this.yCarril = posY;
    this.velocidad = velocidad;

    this.ancho = 140;
    this.alto = 50;
  }

  dibujar() {
    image(this.miImagen, this.posX, this.posY, this.ancho, this.alto);
  }

  mover() {
    this.posX += this.velocidad;

    if (this.velocidad > 0 && this.posX > width) {
      this.posX = -this.ancho;
    }

    else if (this.velocidad < 0 && this.posX < -margenSalida) {
      this.posX = width;
      return true;  
    }

    return false;
  }
}
