import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorariosService } from './horarios.service';
import { Ciclo } from './interfaces/ciclo';

@Component({
  selector: 'app-horarios-page',
  templateUrl: './horarios-page.component.html',
  styleUrls: ['./horarios-page.component.css']
})
export class HorariosPageComponent implements OnInit {

  ciclo: Ciclo | undefined;

  constructor(private _horarioService: HorariosService,
    private _Activatedroute: ActivatedRoute
  ) { }

  sub: any;

  ngOnInit() {

    this.sub = this._Activatedroute.paramMap
      .subscribe(params => {
        const nombre = params.get('nombre') ?? "";
        const curso = params.get('curso') ?? "";
        const turno = params.get('turno') ?? "";

        this.ciclo = this._horarioService.getCiclo(nombre, curso, turno);
        console.log(this.ciclo);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getHora(hora_inicio: Time, hora_fin: Time) {
    let minutos_inicio = hora_inicio.minutes.toString();
    if (minutos_inicio.length < 2) {
      minutos_inicio = "0" + minutos_inicio
    }
    let minutos_fin = hora_fin.minutes.toString();
    if (minutos_fin.length < 2) {
      minutos_fin = "0" + minutos_fin
    }
    return `${hora_inicio.hours}:${minutos_inicio} - ${hora_fin.hours}:${minutos_fin}`
  }
}
