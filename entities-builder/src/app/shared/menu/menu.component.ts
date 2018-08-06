import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  interfaceModellerTitle: string;
  entityModellerTitle: string;
  ruleModellerTitle: string;
  fintrixConnectTitle: string;

  constructor() {
    this.interfaceModellerTitle = 'Interface Modeller';
    this.entityModellerTitle    = 'Entity Modeller';
    this.ruleModellerTitle      = 'Rule Modeller';
    this.fintrixConnectTitle    = 'Fintrix Connect';
  }

  ngOnInit() {
  }

}
