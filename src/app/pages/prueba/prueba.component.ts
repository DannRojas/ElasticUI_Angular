import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from 'src/app/app.animation';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: {'[@routeTransition]': ''}
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
