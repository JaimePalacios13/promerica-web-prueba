import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesControllerService } from 'src/app/modules/clientes/controllers/clientes-controller.service';
import { ProductosControllerService } from 'src/app/modules/productos/controllers/productos-controller.service';
import { Clientes } from 'src/app/shared/interfaces/clientes';
import { Ordenes } from 'src/app/shared/interfaces/ordenes';
import { Productos } from 'src/app/shared/interfaces/productos';
import { AlertService } from 'src/app/shared/modules/services/alert.service';
import { OrdenControllerService } from '../../controllers/orden-controller.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  frmOrdenes: FormGroup = new FormGroup({});
  dataOrders: Ordenes | null = null;

  patternNum: string = '^[0-9]+$';
  typeAction: number = 1;

  viewForm: boolean = false;

  listProductos: Productos[] = [];
  listClientes: Clientes[]=[];

  idOrden: string = '';
  dateCalendar: string ='';

  constructor(
    private productosController: ProductosControllerService,
    private clientesController: ClientesControllerService,
    private ordenesController: OrdenControllerService,
    private alertServices: AlertService
  ) { }

  ngOnInit(): void {
    this._init();
    this.formulario();
    this.validateUrl();
  }
  
  return(){
    window.history.back()
  }

  async validateUrl(){
    const url = window.location.pathname.split('/');
    if (url[2] == 'mostrar') {
      this.idOrden = url[3]
      this.viewForm = true;
      await this.ordenesId(); 
    }
  }

  formulario(){
    this.frmOrdenes = new FormGroup({
      idProducto: new FormControl(
        this.dataOrders ? this.dataOrders.idProducto : null,
        Validators.compose([
          Validators.required
        ])
      ),
      idCliente: new FormControl(
        this.dataOrders ? this.dataOrders.idCliente : null,
        Validators.compose([
          Validators.required
        ])
      ),
      cantidad: new FormControl(
        this.dataOrders ? this.dataOrders.cantidad : null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.patternNum)
        ])
      ),
      fecha: new FormControl(
        this.dataOrders ? this.dataOrders.fecha : null,
        Validators.compose([
          Validators.required
        ])
      )
    })
  }

  async _init(){
    await this.listarOption();
  }
  validarCampos(values: any){
    if (this.frmOrdenes.invalid) {
      this.alertServices.warning('Datos incompletos.', 'top-end');
    } else {
      this.saveData(values);
    }
  }

  async listarOption(){
    this.listProductos = await this.productosController.getDataLis();
    this.listClientes  = await this.clientesController.listClientes();
  }

  async ordenesId(){
    const rsp: Ordenes | null = await this.ordenesController.orderDataId(this.idOrden);
    this.dataOrders = rsp
    this.formulario();
  }

  async saveData(values: any){
    console.log(values);
    const r: boolean = await this.ordenesController.insertData(values);
    if (r) {
      this.alertServices.success('Datos Registrados.', 'top-end');
      this.frmOrdenes.reset();
    }else{
      this.alertServices.warning('Al parecer no se pudieron registrar tus datos.', 'top-end');
    }
  }

}
