import { Horario } from "./horario";
import { Modulo } from "./modulo";

export interface Ciclo {
  'nombre': string,
  'curso': string,
  'turno': string,
  'horario': Horario,
  'modulos': Modulo[];
}

export class Ciclo {

  constructor(nombre: string, curso: string, turno: string, horario: Horario, modulos: Modulo[]) {
    this.nombre = nombre;
    this.curso = curso;
    this.turno = turno;
    this.horario = horario;
    this.modulos = modulos;
  }
}
