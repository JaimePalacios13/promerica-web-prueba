import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import {PanelModule} from 'primeng/panel';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    PanelModule,
    MenubarModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
