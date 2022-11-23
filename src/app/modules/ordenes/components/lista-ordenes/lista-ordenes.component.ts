import { Component, OnInit } from '@angular/core';
import { ClientesControllerService } from 'src/app/modules/clientes/controllers/clientes-controller.service';
import { ProductosControllerService } from 'src/app/modules/productos/controllers/productos-controller.service';
import { Clientes } from 'src/app/shared/interfaces/clientes';
import { DataOrders } from 'src/app/shared/interfaces/data-orders';
import { Ordenes } from 'src/app/shared/interfaces/ordenes';
import { Productos } from 'src/app/shared/interfaces/productos';
import { OrdenControllerService } from '../../controllers/orden-controller.service';

@Component({
  selector: 'app-lista-ordenes',
  templateUrl: './lista-ordenes.component.html',
  styleUrls: ['./lista-ordenes.component.css']
})
export class ListaOrdenesComponent implements OnInit {

  dataOrders: Ordenes[]= [];
  spinner: boolean = true;

  newDataOrders: DataOrders[] = [];
  bandCarga: boolean = false;
  
  constructor(
    private ordersController: OrdenControllerService,
    private clientesController: ClientesControllerService,
    private prodcutosController: ProductosControllerService
  ) { }

  ngOnInit(): void {
    this.__init();
  }

  async __init(){
    await this.orderList();
    this.spinner = false;
    this.bandCarga= true;
  }

  async orderList(){
    const rsp: Ordenes[] = await this.ordersController.listOrders();
    rsp.forEach(async e => {
      const dataCliente: Clientes|null = await this.clientesController.userID(e.idCliente);
      const dataProducto: Productos | null = await this.prodcutosController.getDataProductId(e.idProducto);

      this.newDataOrders.push(
        {
          idOrden: e.idOrden!,
          producto: dataProducto?.nombre,
          cliente: dataCliente?.nombre,
          cantidad: e.cantidad,
          fecha: e.fecha,
          id: e.id
        }
      )
    });
  }

}
