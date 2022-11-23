import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Clientes } from 'src/app/shared/interfaces/clientes';
import { AlertService } from 'src/app/shared/modules/services/alert.service';
import { EventosListenerService } from 'src/app/shared/modules/services/eventos-listener.service';
import { ClientesControllerService } from '../../controllers/clientes-controller.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  frmClientes: FormGroup = new FormGroup({})
  viewModal: boolean = false;
  patternLetras: string = '^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$';
  patternCel: string = '^[0-9-]+$';

  viewForm: boolean = false;

  dataCliente: Clientes | null = null;
  
  spinner: boolean = true;

  @Input() typeAction: number = 1;
  idUser: string = '';
  
  constructor(
    private eventosListener: EventosListenerService,
    private alertServices: AlertService,
    private clientesController: ClientesControllerService
  ) {
    this.formulario();
  }

  ngOnInit(): void {
    this.validateUrl();
  }

  return(){
    window.history.back()
  }
  async validateUrl(){
    const url = window.location.pathname.split('/');
    
    if (url[2] == 'mostrar') {
      this.idUser = url[3]
      this.viewForm = true;
      await this.clienteId();
      this.spinner = false; 
    }
  }

  formulario() {
    this.frmClientes = new FormGroup({
      nombre: new FormControl(
        this.dataCliente ? this.dataCliente.nombre : null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.patternLetras)
        ])
      ),
      apellidos: new FormControl(
        this.dataCliente? this.dataCliente.apellidos : null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.patternLetras)
        ])
      ),
      telefono: new FormControl(
        this.dataCliente? this.dataCliente.telefono : null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.patternCel)
        ])
      ),
      correo: new FormControl(
        this.dataCliente? this.dataCliente.correo : null,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.pattern('^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ@_.]+$')
        ])
      ),
      nit: new FormControl(
        this.dataCliente? this.dataCliente.nit : null,
        Validators.compose([
          Validators.required,
          Validators.minLength(17),
          Validators.pattern('^[0-9-]+$')
        ])
      )
    })
  }
  

  validarCampos(values: any, typeAction: number) {
    if (this.frmClientes.invalid) {
      this.alertServices.warning('Datos incompletos.', 'top-end');
    } else {
      if (typeAction == 1) {
        /* se guarda */
        this.saveData(values)
      }
    }
  }

  async saveData(values: any){
    console.log(values);
    const r: boolean = await this.clientesController.insertData(values);
    this.viewModal = false;
    if (r) {
      this.eventosListener.eventosListener.next(true);
      this.alertServices.success('Datos Registrados.', 'top-end');
      this.frmClientes.reset();
    }else{
      this.alertServices.warning('Al parecer no se pudieron registrar tus datos.', 'top-end');
    }
  }

  async clienteId(){
    const rsp: Clientes | null = await this.clientesController.userID(this.idUser);
    this.dataCliente = rsp
    this.formulario();
  }

}
