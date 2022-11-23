import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() show: boolean = false;
  styleCustom = {with: '25vw',border: 0, background: 'transparent !important'}
  constructor() { }

  ngOnInit(): void {
  }

}
