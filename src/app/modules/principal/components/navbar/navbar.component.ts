import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ){

  }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-user',
        command: (e) => this.router.navigate(['/clientes'])
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-box',
        command: (e) => this.router.navigate(['/productos'])
      },
      {
        label: 'Ordenes',
        icon: 'pi pi-fw pi-copy',
        command: (e) => this.router.navigate(['/ordenes'])
      }
    ];
  }

}
