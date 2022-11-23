import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/shared/interfaces/productos';
import { ProductosControllerService } from '../../controllers/productos-controller.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  dataProductos: Productos[]= [];

  spinner: boolean = true;
  constructor(
    private productosController: ProductosControllerService
  ) { }
  ngOnInit(): void {
    this._init();
  }

  async _init(){
    await this.listProductos();
  }

  async listProductos(){
    const rsp: Productos[] = await this.productosController.getDataLis();
    this.dataProductos = rsp;
    this.spinner = false;    
  }
}
