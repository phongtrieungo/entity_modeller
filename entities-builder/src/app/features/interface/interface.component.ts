import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
