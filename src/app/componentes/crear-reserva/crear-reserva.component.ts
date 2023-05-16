import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { WebSocketService } from 'src/app/servicios/web-socket.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent {

  nombre:any;
  precio:any;
  categoria:Array<String>=['Tecnologia', 'Higiene', 'Artesania']
  medida:any;
  categoria_seleccionada:String='Tecnologia';

  constructor(private servicioReserva:ReservaService, private router: Router) { }

  ngOnInit(): void {
  }

  crear(): void {
    this.servicioReserva.crearReserva({"codigoVendedor":MiUsuarioService.obtenerUsuario(),"nombre":this.nombre,"categoria":this.categoria_seleccionada,"precio":this.precio,"medida":this.medida}).subscribe(
      (data)=>{
        WebSocketService.nuevoProducto({"codigoVendedor":MiUsuarioService.obtenerUsuario(),"nombre":this.nombre,"categoria":this.categoria_seleccionada,"precio":this.precio,"medida":this.medida});
        this.router.navigate(['mi_usuario']);
      },(err)=>{
        console.log(err)
      });
  }

}
