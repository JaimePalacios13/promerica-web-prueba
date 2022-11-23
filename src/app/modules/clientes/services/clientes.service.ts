import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/shared/interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiClientes = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<Clientes[]>{
    const url = `${this.apiClientes}/clientes`;
    return this.http.get<Clientes[]>(url);
  }

  postData(data: any): Observable<boolean>{
    const url = `${this.apiClientes}/clientes`;
    return this.http.post<boolean>(url,data);
  }

  viewDataId(id: string): Observable<Clientes>{
    const url = `${this.apiClientes}/clientes/${id}`;
    return this.http.get<Clientes>(url);
  }
}
