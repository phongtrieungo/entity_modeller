import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  entities = [];

  constructor() { }

  ngOnInit() {
  }

  addPage() {
    this.entities.push('New Page');
  }
}
