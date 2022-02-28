import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fct',
  templateUrl: './fct.component.html',
  styleUrls: ['./fct.component.css']
})
export class FctComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inhabilitar(event: MouseEvent) {
    event.preventDefault()
  }
}
