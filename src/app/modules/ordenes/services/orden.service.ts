import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordenes } from 'src/app/shared/interfaces/ordenes';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private apiOrdenes = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getListOrders(): Observable<Ordenes[]>{
    const url = `${this.apiOrdenes}/ordenes`;
    return this.http.get<Ordenes[]>(url);
  }

  postDataOrders(data: any): Observable<boolean>{
    const url = `${this.apiOrdenes}/ordenes`;
    return this.http.post<boolean>(url,data);
  }

  viewDataOrdersId(id: string): Observable<Ordenes>{
    const url = `${this.apiOrdenes}/ordenes/${id}`;
    return this.http.get<Ordenes>(url);
  }
}
