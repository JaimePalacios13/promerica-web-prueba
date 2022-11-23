import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { ListaOrdenesComponent } from './components/lista-ordenes/lista-ordenes.component';
import {FieldsetModule} from 'primeng/fieldset';
import { NuevaComponent } from './pages/nueva/nueva.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from 'src/app/shared/modules/spinner/spinner.module';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { FechasPipe } from '../../shared/pipes/fechas.pipe';
import { NumbersDirective } from 'src/app/shared/directives/numbers.directive';


@NgModule({
  declarations: [
    OrdenesComponent,
    ListaOrdenesComponent,
    NuevaComponent,
    RegistroComponent,
    FechasPipe,
    NumbersDirective
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    FieldsetModule,
    TableModule,
    HttpClientModule,
    SpinnerModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
  ]
})
export class OrdenesModule { }
