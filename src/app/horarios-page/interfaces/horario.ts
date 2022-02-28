import { Time } from "@angular/common";
import { Modulo } from "./modulo";

type Hora = {
  'hora_inicio': Time,
  'hora_fin':Time,
  'modulos': Modulo[]
}

export interface Horario {
  "horas": Hora[]
}

export class Horario implements Horario {
  constructor(horas: Hora[]) {
    this.horas = horas;
  }
}
