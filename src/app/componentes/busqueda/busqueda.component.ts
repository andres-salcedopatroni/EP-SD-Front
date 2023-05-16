import { Component, OnInit } from '@angular/core';
import {RestauranteService } from 'src/app/servicios/restaurante';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  nombre: String= '';
  datos: any;
  tipo_seleccionado: String= 'Restaurantes';

  constructor(private servicioRestaurante: RestauranteService) { }

  ngOnInit(): void {
  }

  busqueda(nombre:String):void{
    this.servicioRestaurante.busqueda(nombre).subscribe(
      (datos)=>{
        this.datos=datos
      }
    )
  }
}
