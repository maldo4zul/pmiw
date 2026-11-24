class camiones {

  constructor(posX, posY, velocidad) {
    this.miImagen = imgCamion;

    this.ancho = 220;
    this.alto = 80;

    this.posX = posX;
    this.yCarril = posY;
    this.posY = posY + 25 - this.alto / 2;  
    this.velocidad = velocidad;
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
