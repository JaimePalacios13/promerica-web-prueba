import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from 'src/app/shared/modules/spinner/spinner.module';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import {CardModule} from 'primeng/card';
import { IMaskModule } from 'angular-imask';
import { LettersDirective } from 'src/app/shared/directives/letters.directive';


@NgModule({
  declarations: [
    ListaClientesComponent,
    ClientesComponent,
    RegistroComponent,
    NuevoComponent,
    LettersDirective
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FieldsetModule,
    TableModule,
    HttpClientModule,
    SpinnerModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    IMaskModule
  ]
})
export class ClientesModule { }
