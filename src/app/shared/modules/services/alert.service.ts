import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(title: any, position: any): any {
		return this.message({
			position: position,
			icon: 'success',
			title: title,
		});
	}
	warning(title: any, position: any): any {
		return this.message({
			position: position,
			icon: 'warning',
			title: title,
		});
	}
  message(data: { position: any; icon: any; title: any }): any {
		return Swal.fire({
			position: data.position,
			icon: data.icon,
			title: data.title,
			showConfirmButton: false,
			timer: 4000,
		});
	}
}
