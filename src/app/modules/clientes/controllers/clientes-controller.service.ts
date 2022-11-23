import { Injectable } from '@angular/core';
import { Clientes } from 'src/app/shared/interfaces/clientes';
import { ClientesService } from '../services/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesControllerService {

  constructor(
    private clientesService: ClientesService
  ) { }

  listClientes(): Promise<Clientes[]>{
    return new Promise<Clientes[]>((resolve, reject) => {
      this.clientesService.getList().subscribe({
        next: (rsp) => rsp? resolve(rsp) : resolve([]),
        error: ()=> resolve([])
      })
    })
  }
  insertData(data: any): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      this.clientesService.postData(data).subscribe({
        next: (rsp) => rsp? resolve(true) : resolve(false),
        error: () => resolve(false)
      })
    })
  }
  userID(id: string): Promise<Clientes | null>{
    return new Promise<Clientes | null>((resolve,reject)=>{
      this.clientesService.viewDataId(id).subscribe({
        next: (rsp)=> rsp? resolve(rsp) : resolve(null),
        error: () => resolve(null)
      })
    })
  }
}
