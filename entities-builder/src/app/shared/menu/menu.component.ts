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
  workflowModellerTitle: string;
  deployModellerTitle: string;
  teamsModellerTitle: string;
  helpModellerTitle: string;

  constructor() {
    this.interfaceModellerTitle = 'Interface';
    this.entityModellerTitle    = 'Entity';
    this.ruleModellerTitle      = 'Rule';
    this.fintrixConnectTitle    = 'Connect';
    this.workflowModellerTitle  = 'Workflow';
    this.deployModellerTitle    = 'Deploy';
    this.teamsModellerTitle     = 'Teams';
    this.helpModellerTitle      = 'Help';
  }

  ngOnInit() {
  }

}
