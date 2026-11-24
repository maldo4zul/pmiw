class motos {

  constructor(posX, posY, velocidad) {
    this.miImagen = imgMoto;

    this.posX = posX;
    this.yCarril = posY;
    this.posY = posY + 10;  
    this.velocidad = velocidad;

    this.ancho = 70;
    this.alto = 30;
  }

  dibujar() {
    image(this.miImagen, this.posX, this.posY, this.ancho, this.alto);
  }

  mover() {
    this.posX += this.velocidad;

    if (this.posX < -margenSalida) {
      this.posX = width;
      return true;
    }

    return false;
  }
}
