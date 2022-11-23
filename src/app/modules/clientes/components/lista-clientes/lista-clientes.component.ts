import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/shared/interfaces/clientes';
import { EventosListenerService } from 'src/app/shared/modules/services/eventos-listener.service';
import { ClientesControllerService } from '../../controllers/clientes-controller.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  dataClientes: Clientes[]= [];

  spinner: boolean = true;
  
  constructor(
    private clientesController: ClientesControllerService,
    private eventosListener: EventosListenerService
  ) {
    this.eventosListener.eventosListener.subscribe({
      next: (response) => response && this.__init(),
    });
   }

  ngOnInit(): void {
    this.__init();
  }
  
  async __init(){
    await this.clientesList();
    this.spinner = false;
  }

  async clientesList(){
    const response: Clientes[] = await this.clientesController.listClientes();
    this.dataClientes = response
  }

}
