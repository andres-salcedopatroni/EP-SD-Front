import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  urlPatrocinio='http://localhost:3000/reserva/';

  constructor(private http: HttpClient) { }

  crearReserva(reserva:any):Observable<any>{
    return this.http.post(this.urlPatrocinio+'crear',reserva);
  }

}
