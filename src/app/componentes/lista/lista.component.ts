import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],

})
export class ListaComponent implements OnInit {

  @Input() lista: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Reservar(nombre:String):void{
      this.router.navigate(['crear_reserva/'+nombre]);
  }
}
