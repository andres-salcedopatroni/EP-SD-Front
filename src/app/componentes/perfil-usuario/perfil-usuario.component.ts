import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { ReservaService } from 'src/app/servicios/reserva.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  
  dni_ruc: String = '';
  nombre:any;
  tipo:any;
  estado:boolean=MiUsuarioService.estadoUsuario();

  constructor(private route: ActivatedRoute, private servicioUsuario: UsuarioService, private servicioReserva:ReservaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dni_ruc = params['id']; 
      this.servicioUsuario.obtenerUsuario(this.dni_ruc).subscribe(
        (datos)=>{
          console.log(datos);
          this.nombre=datos.nombre;
          this.dni_ruc=datos.dni_ruc;
          this.tipo=datos.tipo;
        })
    });
  }

  patrocinar(): void{
    this.servicioReserva.crearReserva({"codigoUsuario":MiUsuarioService.obtenerUsuario(),"nombreRestaurante":this.dni_ruc,"fecha":100}).subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
    );

  }

}
