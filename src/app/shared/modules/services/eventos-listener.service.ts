import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosListenerService {

  public eventosListener: Subject<boolean> = new Subject();
  constructor() { }
}
