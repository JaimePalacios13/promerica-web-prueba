import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from 'src/app/shared/interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiProductos = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getListProductos(): Observable<Productos[]>{
    const url = `${this.apiProductos}/productos`;
    return this.http.get<Productos[]>(url);
  }

  postDataProduct(data: any): Observable<boolean>{
    const url = `${this.apiProductos}/productos`;
    return this.http.post<boolean>(url,data);
  }

  viewDataProductId(id: string): Observable<Productos>{
    const url = `${this.apiProductos}/productos/${id}`;
    return this.http.get<Productos>(url);
  }
}
