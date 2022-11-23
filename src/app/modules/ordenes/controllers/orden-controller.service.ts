import { Injectable } from '@angular/core';
import { Ordenes } from 'src/app/shared/interfaces/ordenes';
import { OrdenService } from '../services/orden.service';

@Injectable({
  providedIn: 'root'
})
export class OrdenControllerService {

  constructor(
    private ordenesServices: OrdenService
  ) { }

  listOrders(): Promise<Ordenes[]>{
    return new Promise<Ordenes[]>((resolve, reject) => {
      this.ordenesServices.getListOrders().subscribe({
        next: (rsp) => rsp? resolve(rsp) : resolve([]),
        error: ()=> resolve([])
      })
    })
  }
  insertData(data: any): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      this.ordenesServices.postDataOrders(data).subscribe({
        next: (rsp) => rsp? resolve(true) : resolve(false),
        error: () => resolve(false)
      })
    })
  }
  orderDataId(id: string): Promise<Ordenes | null>{
    return new Promise<Ordenes | null>((resolve,reject)=>{
      this.ordenesServices.viewDataOrdersId(id).subscribe({
        next: (rsp)=> rsp? resolve(rsp) : resolve(null),
        error: () => resolve(null)
      })
    })
  }
}
