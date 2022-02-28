import { Injectable } from '@angular/core';
import { Ciclo } from './interfaces/ciclo';
import { Horario } from './interfaces/horario';
import { Modulo } from './interfaces/modulo';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  modulos: any = {
    'ao': new Modulo('ao', 'Aplicaciones Ofimáticas'),
    'fol': new Modulo('fol', 'Formación y Orientación Laboral'),
    'mme': new Modulo('mme', 'Montaje y Mantenimiento de Equipos.'),
    'som': new Modulo('som', 'Sistemas Operativos Monopuesto'),
    'rl': new Modulo('rl', 'Redes Locales'),
    'aw': new Modulo('aw', 'Aplicaciones Web'),
    'eeie': new Modulo('eeie', 'Empresa e Inciativa Emprendedora'),
    'hlc': new Modulo('hlc', 'Horas de Libre Configuración'),
    'si': new Modulo('si', 'Seguridad Informática'),
    'sr': new Modulo('sr', 'Servicios en Red'),
    'sor': new Modulo('sor', 'Sistemas Operativos en Red'),
    'bd': new Modulo('bd', 'Bases de Datos'),
    'ed': new Modulo('ed', 'Entornos de Desarrollo'),
    'lmsgi': new Modulo('lmsgi', 'Lenguajes de Marcas y Sistemas de Gestión de Información'),
    'prog': new Modulo('prog', 'Programación'),
    'sinf': new Modulo('sinf', 'Sistemas Informáticos'),
    'daw': new Modulo('daw', 'Despliegue de Aplicaciones Web'),
    'dwec': new Modulo('dwec', 'Desarrollo Web Entorno Cliente'),
    'dwes': new Modulo('dwes', 'Desarrollo Web Entorno Servidor'),
    'diw': new Modulo('diw', 'Diseño Interfaces Web'),
    'recreo': new Modulo('recreo', 'Recreo'),
    'ingles': new Modulo('ingles', 'ingles')
  }

  horarios: Horario[] = [
    new Horario([
      {
        hora_inicio: { hours: 8, minutes: 0 },
        hora_fin: { hours: 9, minutes: 0 },
        modulos: [
          this.modulos.rl,
          this.modulos.ao,
          this.modulos.mme,
          this.modulos.mme,
          this.modulos.ao,
        ]
      },
      {
        hora_inicio: { hours: 9, minutes: 0 },
        hora_fin: { hours: 10, minutes: 0 },
        modulos: [
          this.modulos.rl,
          this.modulos.ingles,
          this.modulos.som,
          this.modulos.mme,
          this.modulos.ao,
        ]
      },
      {
        hora_inicio: { hours: 10, minutes: 0 },
        hora_fin: { hours: 11, minutes: 0 },
        modulos: [
          this.modulos.ao,
          this.modulos.mme,
          this.modulos.rl,
          this.modulos.rl,
          this.modulos.mme,
        ]
      },
      {
        hora_inicio: { hours: 11, minutes: 0 },
        hora_fin: { hours: 12, minutes: 0 },
        modulos: [
          this.modulos.ingles,
          this.modulos.mme,
          this.modulos.rl,
          this.modulos.rl,
          this.modulos.mme,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 0 },
        hora_fin: { hours: 12, minutes: 30 },
        modulos: [
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 30 },
        hora_fin: { hours: 13, minutes: 30 },
        modulos: [
          this.modulos.som,
          this.modulos.rl,
          this.modulos.ao,
          this.modulos.ao,
          this.modulos.som,
        ]
      },
      {
        hora_inicio: { hours: 13, minutes: 30 },
        hora_fin: { hours: 14, minutes: 30 },
        modulos: [
          this.modulos.som,
          this.modulos.fol,
          this.modulos.fol,
          this.modulos.fol,
          this.modulos.som,
        ]
      }
    ]),
    new Horario([
      {
        hora_inicio: { hours: 8, minutes: 0 },
        hora_fin: { hours: 9, minutes: 0 },
        modulos: [
          this.modulos.sr,
          this.modulos.sr,
          this.modulos.sr,
          this.modulos.eeie,
          this.modulos.si,
        ]
      },
      {
        hora_inicio: { hours: 9, minutes: 0 },
        hora_fin: { hours: 10, minutes: 0 },
        modulos: [
          this.modulos.sr,
          this.modulos.sr,
          this.modulos.sr,
          this.modulos.eeie,
          this.modulos.si,
        ]
      },
      {
        hora_inicio: { hours: 10, minutes: 0 },
        hora_fin: { hours: 11, minutes: 0 },
        modulos: [
          this.modulos.eeie,
          this.modulos.sr,
          this.modulos.sor,
          this.modulos.aw,
          this.modulos.aw,
        ]
      },
      {
        hora_inicio: { hours: 11, minutes: 0 },
        hora_fin: { hours: 12, minutes: 0 },
        modulos: [
          this.modulos.eeie,
          this.modulos.hlc,
          this.modulos.si,
          this.modulos.aw,
          this.modulos.aw,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 0 },
        hora_fin: { hours: 12, minutes: 30 },
        modulos: [
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 30 },
        hora_fin: { hours: 13, minutes: 30 },
        modulos: [
          this.modulos.sor,
          this.modulos.sor,
          this.modulos.si,
          this.modulos.hlc,
          this.modulos.sor,
        ]
      },
      {
        hora_inicio: { hours: 13, minutes: 30 },
        hora_fin: { hours: 14, minutes: 30 },
        modulos: [
          this.modulos.sor,
          this.modulos.sor,
          this.modulos.si,
          this.modulos.hlc,
          this.modulos.sor,
        ]
      }
    ]),
    new Horario([
      {
        hora_inicio: { hours: 8, minutes: 0 },
        hora_fin: { hours: 9, minutes: 0 },
        modulos: [
          this.modulos.prog,
          this.modulos.prog,
          this.modulos.bd,
          this.modulos.ed,
          this.modulos.fol,
        ]
      },
      {
        hora_inicio: { hours: 9, minutes: 0 },
        hora_fin: { hours: 10, minutes: 0 },
        modulos: [
          this.modulos.prog,
          this.modulos.prog,
          this.modulos.bd,
          this.modulos.ed,
          this.modulos.fol,
        ]
      },
      {
        hora_inicio: { hours: 10, minutes: 0 },
        hora_fin: { hours: 11, minutes: 0 },
        modulos: [
          this.modulos.ed,
          this.modulos.prog,
          this.modulos.bd,
          this.modulos.fol,
          this.modulos.sinf,
        ]
      },
      {
        hora_inicio: { hours: 11, minutes: 0 },
        hora_fin: { hours: 12, minutes: 0 },
        modulos: [
          this.modulos.sinf,
          this.modulos.bd,
          this.modulos.sinf,
          this.modulos.prog,
          this.modulos.sinf,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 0 },
        hora_fin: { hours: 12, minutes: 30 },
        modulos: [
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 30 },
        hora_fin: { hours: 13, minutes: 30 },
        modulos: [
          this.modulos.lmsgi,
          this.modulos.bd,
          this.modulos.sinf,
          this.modulos.prog,
          this.modulos.lmsgi,
        ]
      },
      {
        hora_inicio: { hours: 13, minutes: 30 },
        hora_fin: { hours: 14, minutes: 30 },
        modulos: [
          this.modulos.lmsgi,
          this.modulos.bd,
          this.modulos.sinf,
          this.modulos.prog,
          this.modulos.lmsgi,
        ]
      }
    ]),
    new Horario([
      {
        hora_inicio: { hours: 16, minutes: 0 },
        hora_fin: { hours: 17, minutes: 0 },
        modulos: [
          this.modulos.prog,
          this.modulos.lmsgi,
          this.modulos.prog,
          this.modulos.sinf,
          this.modulos.prog,
        ]
      },
      {
        hora_inicio: { hours: 17, minutes: 0 },
        hora_fin: { hours: 18, minutes: 0 },
        modulos: [
          this.modulos.prog,
          this.modulos.lmsgi,
          this.modulos.prog,
          this.modulos.si,
          this.modulos.prog,
        ]
      },
      {
        hora_inicio: { hours: 18, minutes: 0 },
        hora_fin: { hours: 19, minutes: 0 },
        modulos: [
          this.modulos.prog,
          this.modulos.fol,
          this.modulos.fol,
          this.modulos.si,
          this.modulos.prog,
        ]
      },
      {
        hora_inicio: { hours: 19, minutes: 0 },
        hora_fin: { hours: 20, minutes: 0 },
        modulos: [
          this.modulos.bd,
          this.modulos.si,
          this.modulos.fol,
          this.modulos.bd,
          this.modulos.ed,
        ]
      },
      {
        hora_inicio: { hours: 20, minutes: 0 },
        hora_fin: { hours: 21, minutes: 0 },
        modulos: [
          this.modulos.bd,
          this.modulos.si,
          this.modulos.lmsgi,
          this.modulos.bd,
          this.modulos.ed,
        ]
      },
      {
        hora_inicio: { hours: 21, minutes: 0 },
        hora_fin: { hours: 22, minutes: 0 },
        modulos: [
          this.modulos.bd,
          this.modulos.si,
          this.modulos.lmsgi,
          this.modulos.bd,
          this.modulos.ed,
        ]
      }
    ]),
    new Horario([
      {
        hora_inicio: { hours: 8, minutes: 0 },
        hora_fin: { hours: 9, minutes: 0 },
        modulos: [
          this.modulos.eeie,
          this.modulos.dwes,
          this.modulos.dwes,
          this.modulos.dwes,
          this.modulos.hlc,
        ]
      },
      {
        hora_inicio: { hours: 9, minutes: 0 },
        hora_fin: { hours: 10, minutes: 0 },
        modulos: [
          this.modulos.eeie,
          this.modulos.dwes,
          this.modulos.dwes,
          this.modulos.dwes,
          this.modulos.hlc,
        ]
      },
      {
        hora_inicio: { hours: 10, minutes: 0 },
        hora_fin: { hours: 11, minutes: 0 },
        modulos: [
          this.modulos.diw,
          this.modulos.dwes,
          this.modulos.dwec,
          this.modulos.dwes,
          this.modulos.eeie,
        ]
      },
      {
        hora_inicio: { hours: 11, minutes: 0 },
        hora_fin: { hours: 12, minutes: 0 },
        modulos: [
          this.modulos.hlc,
          this.modulos.daw,
          this.modulos.dwec,
          this.modulos.diw,
          this.modulos.eeie,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 0 },
        hora_fin: { hours: 12, minutes: 30 },
        modulos: [
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
          this.modulos.recreo,
        ]
      },
      {
        hora_inicio: { hours: 12, minutes: 30 },
        hora_fin: { hours: 13, minutes: 30 },
        modulos: [
          this.modulos.dwec,
          this.modulos.dwec,
          this.modulos.daw,
          this.modulos.diw,
          this.modulos.diw,
        ]
      },
      {
        hora_inicio: { hours: 13, minutes: 30 },
        hora_fin: { hours: 14, minutes: 30 },
        modulos: [
          this.modulos.dwec,
          this.modulos.dwec,
          this.modulos.daw,
          this.modulos.diw,
          this.modulos.diw,
        ]
      }
    ]),
    new Horario([
      {
        hora_inicio: { hours: 16, minutes: 0 },
        hora_fin: { hours: 17, minutes: 0 },
        modulos: [
          this.modulos.dwes,
          this.modulos.eeie,
          this.modulos.dwes,
          this.modulos.daw,
          this.modulos.dwes,
        ]
      },
      {
        hora_inicio: { hours: 17, minutes: 0 },
        hora_fin: { hours: 18, minutes: 0 },
        modulos: [
          this.modulos.dwes,
          this.modulos.eeie,
          this.modulos.dwes,
          this.modulos.daw,
          this.modulos.dwes,
        ]
      },
      {
        hora_inicio: { hours: 18, minutes: 0 },
        hora_fin: { hours: 19, minutes: 0 },
        modulos: [
          this.modulos.dwes,
          this.modulos.hlc,
          this.modulos.diw,
          this.modulos.daw,
          this.modulos.dwes,
        ]
      },
      {
        hora_inicio: { hours: 19, minutes: 0 },
        hora_fin: { hours: 20, minutes: 0 },
        modulos: [
          this.modulos.diw,
          this.modulos.hlc,
          this.modulos.hlc,
          this.modulos.dwec,
          this.modulos.dwec,
        ]
      },
      {
        hora_inicio: { hours: 20, minutes: 0 },
        hora_fin: { hours: 21, minutes: 0 },
        modulos: [
          this.modulos.diw,
          this.modulos.diw,
          this.modulos.eeie,
          this.modulos.dwec,
          this.modulos.dwec,
        ]
      },
      {
        hora_inicio: { hours: 21, minutes: 0 },
        hora_fin: { hours: 22, minutes: 0 },
        modulos: [
          this.modulos.diw,
          this.modulos.diw,
          this.modulos.eeie,
          this.modulos.dwec,
          this.modulos.dwec,
        ]
      }
    ])
  ]

  ciclos: Ciclo[] = [
    new Ciclo(
      'SMR',
      '1',
      'mañana',
      this.horarios[0],
      [
        this.modulos.ao,
        this.modulos.fol,
        this.modulos.mme,
        this.modulos.som,
        this.modulos.rl
      ]),
    new Ciclo(
      'SMR',
      '2',
      'mañana',
      this.horarios[1],
      [
        this.modulos.aw,
        this.modulos.eeie,
        this.modulos.hlc,
        this.modulos.si,
        this.modulos.sr,
        this.modulos.sor
      ]),
    new Ciclo(
      'DAW',
      '1',
      'mañana',
      this.horarios[2],
      [
        this.modulos.bd,
        this.modulos.ed,
        this.modulos.fol,
        this.modulos.lmsgi,
        this.modulos.prog,
        this.modulos.sinf
      ]),
    new Ciclo(
      'DAW',
      '1',
      'tarde',
      this.horarios[3],
      [
        this.modulos.bd,
        this.modulos.ed,
        this.modulos.fol,
        this.modulos.lmsgi,
        this.modulos.prog,
        this.modulos.sinf
      ]),
    new Ciclo(
      'DAW',
      '2',
      'mañana',
      this.horarios[4],
      [
        this.modulos.daw,
        this.modulos.dwec,
        this.modulos.dwes,
        this.modulos.diw,
        this.modulos.eeie,
        this.modulos.hlc
      ]),
    new Ciclo(
      'DAW',
      '2',
      'tarde',
      this.horarios[5],
      [
        this.modulos.daw,
        this.modulos.dwec,
        this.modulos.dwes,
        this.modulos.diw,
        this.modulos.eeie,
        this.modulos.hlc
      ]),

  ]

  constructor() { }


  public getCiclo(nombre: string = '', curso: string = '', turno: string = '') {
    return this.ciclos.find(ciclo => {
      return ciclo.nombre == nombre && ciclo.curso == curso && ciclo.turno == turno
    });
  }
}
