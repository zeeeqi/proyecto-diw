export interface Modulo {
  'abrev': string,
  'nombre': string
}

export class Modulo {

  constructor(abrev: string, nombre: string) {
    this.abrev = abrev;
    this.nombre = nombre;
  }
}
