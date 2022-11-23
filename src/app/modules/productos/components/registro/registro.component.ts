import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/shared/interfaces/productos';
import { AlertService } from 'src/app/shared/modules/services/alert.service';
import { ProductosControllerService } from '../../controllers/productos-controller.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  frmProductos: FormGroup = new FormGroup({})
  patternLetras: string = '^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$';
  patternCel: string = '^[0-9]+$';

  viewForm: boolean = false;

  idProducto: string ='';

  dataProducto: Productos | null = null;

  idProduct: string = '';

  constructor(
    private productosController: ProductosControllerService,
    private alertServices: AlertService
  ) { }

  ngOnInit(): void {
    this.validateUrl();
    this.formulario();
  }

  async validateUrl(){
    const url = window.location.pathname.split('/');

    if (url[2] == 'mostrar') {
      this.idProduct = url[3]
      this.viewForm = true;
      await this.productosId(); 
    }
  }

  formulario(){
    this.frmProductos = new FormGroup({
      nombre: new FormControl(
        this.dataProducto? this.dataProducto.nombre : null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.patternLetras)
        ])
      ),
      descripcion: new FormControl(
        this.dataProducto? this.dataProducto.descripcion : null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.patternLetras)
        ])
      ),
      precio: new FormControl(
        this.dataProducto? this.dataProducto.precio : null,
        Validators.compose([
          Validators.required
        ])
      ),
    })
  }

  validarCampos(values: any) {
    if (this.frmProductos.invalid) {
      this.alertServices.warning('Datos incompletos.', 'top-end');
    } else {
      this.saveData(values)
    }
  }

  async saveData(values: any){
    console.log(values);
    const r: boolean = await this.productosController.postDataProducto(values);
    if (r) {
      this.alertServices.success('Datos Registrados.', 'top-end');
      this.frmProductos.reset();
    }else{
      this.alertServices.warning('Al parecer no se pudieron registrar tus datos.', 'top-end');
    }
  }

  async productosId(){
    const rsp: Productos | null = await this.productosController.getDataProductId(this.idProduct);
    this.dataProducto = rsp;
    this.formulario();    
  }

  return(){
    window.history.back()
  }

}
