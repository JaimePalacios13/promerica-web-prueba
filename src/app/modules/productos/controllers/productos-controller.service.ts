import { Injectable } from '@angular/core';
import { Productos } from 'src/app/shared/interfaces/productos';
import { ProductosService } from '../services/productos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosControllerService {

  constructor(
    private productosServices: ProductosService
  ) { }

  getDataLis(): Promise<Productos[]>{
    return new Promise<Productos[]>((resolve, reject) => {
      this.productosServices.getListProductos().subscribe({
        next: (rsp)=> rsp? resolve(rsp) : resolve([]),
        error: ()=> resolve([]) 
      })
    })
  }

  postDataProducto(data: any): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      this.productosServices.postDataProduct(data).subscribe({
        next:(rsp)=> rsp? resolve(true) : resolve(false),
        error: ()=> resolve(false)
      })
    })
  }

  getDataProductId(id: string): Promise<Productos | null>{
    return new Promise<Productos | null>((resolve, reject) => {
      this.productosServices.viewDataProductId(id).subscribe({
        next: (rsp)=> rsp? resolve(rsp) : resolve(null),
        error: ()=> resolve(null)
      })
    })
  }
}
